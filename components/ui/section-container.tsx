import React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

/**
 * SectionContainer component
 *
 * A reusable wrapper for page sections with standard padding, max-width, and centering.
 * Default: py-20, max-w-6xl, mx-auto, px-6
 *
 * @example
 * ```tsx
 * <SectionContainer>
 *   <h2>Section Title</h2>
 *   <p>Section content goes here</p>
 * </SectionContainer>
 * ```
 */
const SectionContainer = React.forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ className, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("py-20 max-w-6xl mx-auto px-6", className)}
      {...props}
    >
      {children}
    </section>
  )
)

SectionContainer.displayName = "SectionContainer"

export { SectionContainer }
