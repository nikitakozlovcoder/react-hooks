import {useCallback, useEffect, useRef} from "react";
import _ from 'lodash';

export function useDebounce(fn: (...args: any[]) => void, debounceTime: number, depth: any[]) {
  const ref = useRef<(...args: any[]) => void>();
  useEffect(() => {
    ref.current = fn;
  }, depth);
  
  return useCallback(_.debounce((...args: any[]) => {
    const callback = ref.current;
    if (callback){
      callback(...args);
    }
  }, debounceTime), [ref, debounceTime]);
}