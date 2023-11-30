import { SomeFn, debounce } from '@/utils/common'
import { useEffect, useMemo } from 'react'

const useDebounce = <T extends SomeFn>(fn: T, timeout: number) => {
  const debounced = useMemo(() => {
    return debounce(fn, timeout)
  }, [fn, timeout])

  useEffect(() => {
    return () => debounced.cancel()
  }, [debounced])

  return debounced
}

export default useDebounce
