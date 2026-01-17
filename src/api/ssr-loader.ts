// src/api/ssr-loader.ts
import { ssrContext } from "./orval-instance";

/**
 * Wrapper per loader che usano chiamate Orval generate
 * Fornisce automaticamente il token durante SSR
 * 
 * Uso:
 * loader: withSSRAuth(async () => {
 *   const guides = await getMyGuides(); // Chiamata Orval generata
 *   return { guides };
 * })
 */
export function withSSRAuth<TReturn>(
  loaderFn: () => Promise<TReturn>
) {
  return async (args: any): Promise<TReturn> => {
    const context = args?.context;
    
    // Durante SSR con token, fornisci il context
    if (typeof window === "undefined" && context?.auth?.token) {
      return ssrContext.run({ token: context.auth.token }, () => loaderFn());
    }
    
    // Lato client o senza token, esegui normalmente
    return loaderFn();
  };
}
