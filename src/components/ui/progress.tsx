import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const progressVariants = cva(
  "h-2 w-full overflow-hidden rounded-full bg-secondary",
  {
    variants: {
      variant: {
        default: "bg-secondary",
        primary: "bg-primary",
        orange: "bg-accent-orange",
        purple: "bg-accent-purple",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value: number
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={progressVariants({ variant, className })}
        {...props}
      >
        <div
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </div>
    )
  }
)
Progress.displayName = "Progress"

export { Progress }