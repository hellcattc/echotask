import { ForwardedRef, GenericProps } from '@/types/UI'
import { forwardRef } from 'react'

interface InputProps extends GenericProps<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        className={`rounded-xl border-2 w-fit p-4  ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </input>
    )
  },
)

export default Input
