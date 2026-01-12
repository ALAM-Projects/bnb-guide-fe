import axios, { AxiosRequestConfig, AxiosError } from "axios";

// Istanza base di Axios
export const AXIOS_INSTANCE = axios.create({
  baseURL: "http://localhost:3001", // Assicurati che coincida con la porta del tuo NestJS
  withCredentials: true, // Necessario per inviare/ricevere i cookie (refresh token)
});

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
