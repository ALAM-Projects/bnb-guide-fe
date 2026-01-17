import axios, { AxiosRequestConfig, AxiosError } from "axios";
import Cookies from "js-cookie";

// Wrapper per AsyncLocalStorage che funziona sia lato server che client
let ssrContext: {
  getStore: () => { token?: string } | undefined;
  run: <T>(store: { token?: string }, fn: () => T) => T;
};

if (typeof window === "undefined") {
  // Lato server: usa AsyncLocalStorage
  const { AsyncLocalStorage } = await import("node:async_hooks");
  const storage = new AsyncLocalStorage<{ token?: string }>();
  ssrContext = {
    getStore: () => storage.getStore(),
    run: <T>(store: { token?: string }, fn: () => T) => storage.run(store, fn),
  };
} else {
  // Lato client: noop (non serve AsyncLocalStorage nel browser)
  ssrContext = {
    getStore: () => undefined,
    run: <T>(_store: { token?: string }, fn: () => T) => fn(),
  };
}

export { ssrContext };

// Istanza base di Axios
export const AXIOS_INSTANCE = axios.create({
  baseURL: "http://localhost:3001", // Assicurati che coincida con la porta del tuo NestJS
  withCredentials: true, // Necessario per inviare/ricevere i cookie (refresh token)
});

// Intercettore per aggiungere l'Access Token a ogni richiesta
AXIOS_INSTANCE.interceptors.request.use((config: any) => {
  // Durante SSR, prendi il token dal context
  const ssrToken = ssrContext.getStore()?.token;
  
  if (ssrToken) {
    config.headers.Authorization = `Bearer ${ssrToken}`;
  } else {
    // Lato client, usa js-cookie
    const token = Cookies.get("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Intercettore per gestire l'errore 401 (Token scaduto)
AXIOS_INSTANCE.interceptors.response.use(
  (response: any) => response,
  async (error: any) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          "http://localhost:3001/auth/refresh",
          {},
          { withCredentials: true }
        );

        const { access_token } = res.data;
        Cookies.set("auth_token", access_token, { path: "/" });

        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return AXIOS_INSTANCE(originalRequest);
      } catch (refreshError) {
        Cookies.remove("auth_token");

        // Controlla se siamo nel browser prima di usare window
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// Funzione mutator che Orval userà per ogni chiamata
export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  return AXIOS_INSTANCE({
    ...config,
    ...options,
  }).then((res) => res.data);
};

// Tipo di errore per TanStack Query
export type ErrorType<Error> = AxiosError<Error>;
