import React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
}

/**
 * PageHeader component
 *
 * A header component for page titles with optional subtitle.
 * Features:
 * - H1 title with brand font styling
 * - Optional subtitle text
 * - Responsive text sizing
 * - Customizable via className prop
 *
 * @example
 * ```tsx
 * <PageHeader
 *   title="Welcome to Local Studios"
 *   subtitle="Discover the art of collaborative creation"
 * />
 * ```
 */
const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ className, title, subtitle, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("space-y-2 mb-8", className)}
      {...props}
    >
      <h1 className="text-4xl md:text-5xl font-display font-bold text-ink">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-muted-text">
          {subtitle}
        </p>
      )}
    </div>
  )
)

PageHeader.displayName = "PageHeader"

export { PageHeader }
