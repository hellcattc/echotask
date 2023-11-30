type SomeFn = (...args: unknown[]) => void
type DebouncedFn<T extends SomeFn> = {
  (...args: Parameters<T>): void
  cancel: () => void
}

const debounce = <T extends (...args: unknown[]) => void>(
  fn: T,
  ms: number,
): DebouncedFn<T> => {
  let lastId: NodeJS.Timeout | null = null
  const debouncedFn = (...args: Parameters<T>) => {
    if (lastId !== null) clearTimeout(lastId)
    lastId = setTimeout(() => {
      fn(...args)
    }, ms)
  }

  debouncedFn.cancel = () => {
    if (lastId !== null) {
      clearTimeout(lastId)
    }
  }

  return debouncedFn
}

export { debounce }
export type { SomeFn, DebouncedFn }
