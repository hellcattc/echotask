import { HTMLAttributes, ReactNode } from 'react'

type ForwardedRef<T> = React.ForwardedRef<T>

interface GenericProps<T> extends HTMLAttributes<T> {
  children?: ReactNode
}

export type { ForwardedRef, GenericProps }
