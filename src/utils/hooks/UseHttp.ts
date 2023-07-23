import {useEffect, useState} from "react";
import axios, {AxiosError, AxiosRequestConfig, CancelTokenSource} from "axios";
import {callHttp} from "../CallHttp";

export function useHttp<T>(config: AxiosRequestConfig): {data: T | null, error: AxiosError | null, status: 'ok' | 'loading' | 'error' | null, call: () => CancelTokenSource} {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [status, setStatus] = useState<'ok' | 'loading' | 'error' | null>(null);

  const call = () => {
    const cancelTokenSource = axios.CancelToken.source();
    setStatus('loading');
    callHttp<T>({...config, cancelToken: cancelTokenSource.token}).then(x => {
      if (x.status === 'ok') {
        setData(x.data);
      } else {
        setError(x.error)
      }

      setStatus(x.status);
    });

    return cancelTokenSource;
  }
  
  return {
    data,
    error,
    status,
    call
  };
}