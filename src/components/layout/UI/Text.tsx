import { ForwardedRef, GenericProps } from '@/types/UI'
import { forwardRef } from 'react'

interface TextProps extends GenericProps<HTMLParagraphElement> {}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, ...props }, ref: ForwardedRef<HTMLParagraphElement>) => {
    return (
      <p ref={ref} {...props}>
        {children}
      </p>
    )
  },
)

export default Text
