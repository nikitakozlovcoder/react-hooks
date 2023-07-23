import axios, {AxiosError, AxiosRequestConfig} from "axios";

export async function callHttp<T>(config: AxiosRequestConfig): Promise<{data: T | null, error: AxiosError | null, status: 'ok' | 'error'}> {
  try {
    const resp = await axios<T>(config);
    return {data: resp.data, error: null, status: 'ok'};
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return {data: null, error: e, status: 'error'};
    }
    else {
      throw e;
    }
  }
}