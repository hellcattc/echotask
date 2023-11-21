import { SomeFn, debounce } from '@/utils/common'
import { DependencyList, useCallback, useMemo } from 'react'

const useDebounce = <T extends SomeFn>(
  fn: T,
  timeout: number,
  deps: DependencyList,
) => {
  const cb = useCallback(fn, [fn, ...deps])
  const debounced = useMemo(() => {
    return debounce(cb, timeout)
  }, [timeout, cb])
  return debounced
}

export default useDebounce
