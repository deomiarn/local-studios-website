/**
 * Animation Variants for Framer Motion
 * Swiss-minimalism micro-animations with subtle, purposeful motion
 *
 * Guidelines:
 * - Respect prefers-reduced-motion in consuming components
 * - Use GPU-accelerated properties only (transform, opacity)
 * - Timing: 200-400ms for most interactions, max 600ms for page transitions
 * - Easing: ease-out for entrances, ease-in for exits
 */

/**
 * Fade-up entrance animation for scroll-triggered content
 * Initial state: opacity 0, translated down 20px
 * Final state: full opacity, normal position
 */
export const fadeUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
  transition: {
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1], // cubic-bezier ease-out
  },
}

/**
 * Simple fade-in animation
 * Used for sections and backgrounds
 */
export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1],
  },
}

/**
 * Scale-up entrance with fade
 * Used for cards and emphasizing elements
 */
export const scaleUp = {
  initial: {
    scale: 0.95,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  transition: {
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1],
  },
}

/**
 * Stagger container for sequential child animations
 * Use with staggerChildren to create cascading effects
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

/**
 * Item animation for use within stagger containers
 * Individual items inherit timing from container
 */
export const staggerItem = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

/**
 * Subtle hover lift effect for interactive elements
 * Cards, buttons - slight upward movement on hover
 */
export const hoverLift = {
  whileHover: {
    y: -4,
    transition: {
      duration: 0.2,
    },
  },
}

/**
 * Button hover effect with spring physics
 * Subtle scale and lift combined
 */
export const buttonHover = {
  whileHover: {
    scale: 1.02,
    y: -2,
  },
  whileTap: {
    scale: 0.98,
  },
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 17,
  },
}

/**
 * Page transition entrance
 * Smooth fade-in with slight vertical movement
 */
export const pageEnter = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1],
  },
}

/**
 * Page transition exit
 * Fade out with slight upward movement
 */
export const pageExit = {
  exit: {
    opacity: 0,
    y: -10,
  },
  transition: {
    duration: 0.2,
    ease: [0.4, 0, 1, 1],
  },
}

/**
 * Underline slide-in animation for links
 * Creates left-to-right underline effect
 */
export const underlineSlide = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
  },
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1],
  },
}

/**
 * Viewport detection options for scroll animations
 * Triggers animation when element enters viewport
 * once: true = animation only triggers once
 * margin: "-100px" = starts animation 100px before entering viewport
 */
export const scrollViewportOptions = {
  once: true,
  margin: '-100px',
}

/**
 * Custom timing curves aligned with Swiss design principles
 */
export const easing = {
  easeOut: [0.22, 1, 0.36, 1],
  easeIn: [0.4, 0, 1, 1],
  easeInOut: [0.4, 0, 0.2, 1],
}

/**
 * Preset durations following micro-interaction guidelines
 */
export const durations = {
  microInteraction: 0.15, // 150ms
  interaction: 0.2, // 200ms
  element: 0.3, // 300ms
  section: 0.4, // 400ms
  pageTransition: 0.3, // 300ms
  complex: 0.6, // 600ms
}

/**
 * Spring presets for bouncy, playful animations
 */
export const springs = {
  gentle: {
    type: 'spring',
    stiffness: 250,
    damping: 25,
  },
  standard: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  },
  snappy: {
    type: 'spring',
    stiffness: 400,
    damping: 17,
  },
  bouncy: {
    type: 'spring',
    stiffness: 450,
    damping: 12,
  },
}
