import { ForwardedRef, GenericProps } from '@/types/UI'
import { forwardRef } from 'react'

interface ButtonProps extends GenericProps<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button
        className={`rounded-xl border-2 w-fit p-4  ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

export default Button
