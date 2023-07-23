import {useEffect} from "react";
import {AxiosError, AxiosRequestConfig} from "axios";
import {useHttp} from "./UseHttp";

export function useHttpEffect<T>(config: AxiosRequestConfig, depth: any[]): [T| null, AxiosError| null, 'ok' | 'loading' | 'error' | null] {
  const http= useHttp<T>(config);
  useEffect(() => {
    const tokenSource = http.call();
    return () => {
      tokenSource.cancel();
    }
  }, depth);
  
  return [http.data, http.error, http.status];
}