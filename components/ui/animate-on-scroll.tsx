'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'
import {
  fadeUp,
  fadeIn,
  scaleUp,
  staggerContainer,
  staggerItem,
} from '@/lib/animations'

/**
 * Animation type options for AnimateOnScroll
 */
type AnimationType = 'fadeUp' | 'fadeIn' | 'scaleUp' | 'stagger'

/**
 * Preset animation configurations
 */
const animationMap = {
  fadeUp: fadeUp,
  fadeIn: fadeIn,
  scaleUp: scaleUp,
  stagger: staggerItem,
}

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  staggered?: boolean
  className?: string
}

/**
 * AnimateOnScroll Component
 *
 * Wraps content with scroll-triggered fade-up or other entrance animations.
 * Respects prefers-reduced-motion for accessibility.
 *
 * Usage:
 * ```tsx
 * <AnimateOnScroll animation="fadeUp">
 *   <Card>Your content</Card>
 * </AnimateOnScroll>
 *
 * <AnimateOnScroll animation="stagger" staggered>
 *   {items.map(item => <div key={item.id}>{item.name}</div>)}
 * </AnimateOnScroll>
 * ```
 */
export function AnimateOnScroll({
  children,
  animation = 'fadeUp',
  delay = 0,
  staggered = false,
  className,
}: AnimateOnScrollProps) {
  const shouldReduceMotion = useReducedMotion()

  // Get animation config
  const animationConfig = animationMap[animation] || fadeUp

  // If reduced motion is preferred, return children without animation
  if (shouldReduceMotion) {
    return <>{children}</>
  }

  // For staggered animations, wrap children in a container
  if (staggered && animation === 'stagger') {
    return (
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className={className}
      >
        <motion.div
          variants={animationConfig}
          custom={delay}
          transition={{
            ...(('transition' in animationConfig) ? animationConfig.transition : {}),
            delay,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    )
  }

  // Regular scroll-triggered animation
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true, margin: '-100px' }}
      variants={animationConfig}
      transition={{
        ...animationConfig.transition,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerContainer Component
 *
 * Wrapper for creating staggered animations on child elements.
 * Each child element will animate sequentially with a 100ms delay.
 *
 * Usage:
 * ```tsx
 * <StaggerContainer>
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </StaggerContainer>
 * ```
 */
interface StaggerContainerProps {
  children: ReactNode
  delayChildren?: number
  staggerChildren?: number
}

export function StaggerContainer({
  children,
  delayChildren = 0.1,
  staggerChildren = 0.1,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      transition={{
        staggerChildren,
        delayChildren,
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerItem Component
 *
 * Individual item within a StaggerContainer.
 * Inherits animation timing from parent container.
 *
 * Usage:
 * ```tsx
 * <StaggerContainer>
 *   <StaggerItem><Card>Item 1</Card></StaggerItem>
 *   <StaggerItem><Card>Item 2</Card></StaggerItem>
 * </StaggerContainer>
 * ```
 */
interface StaggerItemProps {
  children: ReactNode
}

export function StaggerItem({ children }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return <motion.div variants={staggerItem}>{children}</motion.div>
}

/**
 * FadeInOnScroll Component
 *
 * Simple fade-in animation for elements as they enter viewport.
 * More subtle than fadeUp, good for backgrounds and non-primary elements.
 *
 * Usage:
 * ```tsx
 * <FadeInOnScroll>
 *   <section className="bg-mist py-20">
 *     Your content
 *   </section>
 * </FadeInOnScroll>
 * ```
 */
interface FadeInOnScrollProps {
  children: ReactNode
  delay?: number
}

export function FadeInOnScroll({ children, delay = 0 }: FadeInOnScrollProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
      transition={{
        ...fadeIn.transition,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * ScaleUpOnScroll Component
 *
 * Scale and fade animation for cards and emphasized elements.
 * Adds more visual interest than pure fade-up.
 *
 * Usage:
 * ```tsx
 * <ScaleUpOnScroll>
 *   <Card>Featured content</Card>
 * </ScaleUpOnScroll>
 * ```
 */
interface ScaleUpOnScrollProps {
  children: ReactNode
  delay?: number
}

export function ScaleUpOnScroll({
  children,
  delay = 0,
}: ScaleUpOnScrollProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={scaleUp}
      transition={{
        ...scaleUp.transition,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
