type SomeFn = (...args: unknown[]) => void
type DebouncedFn<T extends SomeFn> = (...args: Parameters<T>) => void

const debounce = <T extends (...args: unknown[]) => void>(
  fn: T,
  ms: number,
): DebouncedFn<T> => {
  let lastId: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (lastId !== null) clearTimeout(lastId)
    lastId = setTimeout(() => {
      fn(...args)
    }, ms)
  }
}

export { debounce }
