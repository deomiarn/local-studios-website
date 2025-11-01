# Animation Patterns SOP (Standard Operating Procedure)

## Quick Reference for Adding Animations

### Pattern 1: Simple Fade-Up on Scroll

**Use case:** Headings, body text, individual elements

```tsx
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'

<AnimateOnScroll animation="fadeUp">
  <h2>My Heading</h2>
</AnimateOnScroll>
```

**When to use:**
- Single elements or text blocks
- Headings and subheadings
- CTA text
- Testimonials

**Timing:**
- Duration: 500ms (default)
- Stagger delay: 0.1s between repeated use

---

### Pattern 2: Staggered Grid (Most Common)

**Use case:** Card grids, lists, multiple items

```tsx
import { StaggerContainer, StaggerItem } from '@/components/ui/animate-on-scroll'

<StaggerContainer delayChildren={0.1} staggerChildren={0.1}>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {items.map(item => (
      <StaggerItem key={item.id}>
        <Card>{item.content}</Card>
      </StaggerItem>
    ))}
  </div>
</StaggerContainer>
```

**When to use:**
- Service cards (3+ items)
- Project grids
- Team member cards
- Technology stack badges
- Feature lists

**Stagger Timing:**
- delayChildren: How long before first item animates (usually 0.1s)
- staggerChildren: Delay between each item (0.05-0.15s depending on grid density)

**Density reference:**
- Dense grids (6+ cards): 50-70ms stagger
- Standard (3-4 cards): 100ms stagger
- Large items (2 cards): 100-150ms stagger

---

### Pattern 3: Staggered Hero/Text Sequence

**Use case:** Hero sections with multiple text elements

```tsx
import { motion } from 'framer-motion'

<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
>
  Title
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
    delay: 0.1,
  }}
>
  Subtitle
</motion.p>
```

**When to use:**
- Hero sections
- Intro paragraphs
- Button groups
- Sequential text reveals

**Timing:**
- Primary (0ms): Title/headline
- Secondary (100ms): Subtitle/description
- Tertiary (200ms): CTA buttons

---

### Pattern 4: Fade-In (Subtle Background)

**Use case:** Background elements, sections

```tsx
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'

<AnimateOnScroll animation="fadeIn">
  <section className="bg-mist py-20">
    Content here
  </section>
</AnimateOnScroll>
```

**When to use:**
- Background color sections
- Dividers
- Secondary content
- Non-critical elements

**Duration:** 400ms (default)

---

### Pattern 5: Scale-Up for Emphasis

**Use case:** Featured cards, emphasized sections

```tsx
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'

<AnimateOnScroll animation="scaleUp">
  <Card className="featured">Featured content</Card>
</AnimateOnScroll>
```

**When to use:**
- Featured cards or sections
- Testimonial highlights
- Call-to-action emphasis
- Award/certification badges

**Duration:** 400ms (default)

---

## Adding Animations: Workflow

### Step 1: Identify Animation Opportunities
- New card grids? → Staggered Grid pattern
- Hero section? → Staggered Hero pattern
- Single headings? → Simple Fade-Up
- Entire sections? → Fade-In or Scale-Up

### Step 2: Add Imports
```tsx
'use client' // If not already present

import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/animate-on-scroll'
// OR
import { motion } from 'framer-motion'
```

### Step 3: Wrap Components
- Grids: Wrap with StaggerContainer, items with StaggerItem
- Text: Wrap with AnimateOnScroll or motion components
- Sections: Wrap with AnimateOnScroll

### Step 4: Test
- Browser DevTools → Performance tab
- Check for 60fps (green bars)
- Test on mobile device if possible
- Verify with prefers-reduced-motion enabled

### Step 5: Adjust Timing (if needed)
- Too fast? Increase delay/stagger
- Too slow? Decrease delay/stagger
- Use animation.md reference for timing values

---

## Timing Guidelines

### Standard Timings
```typescript
// Use these pre-defined values from /lib/animations.ts
durations.microInteraction   // 150ms (hover states)
durations.interaction        // 200ms (quick transitions)
durations.element            // 300ms (standard animation)
durations.section            // 400ms (scroll entrance)
durations.complex            // 600ms (max, rarely used)

easing.easeOut               // [0.22, 1, 0.36, 1] (entrances)
easing.easeIn                // [0.4, 0, 1, 1] (exits)
easing.easeInOut             // [0.4, 0, 0.2, 1] (emphasis)
```

### Delay Patterns
```
Single element:           0ms only
Two elements:            0ms, 100ms
Three elements:          0ms, 100ms, 200ms
Four+ elements:          Use staggerChildren (0.08-0.1s)
```

---

## Common Mistakes to Avoid

### Don't:
- Animate layout properties (width, height, left, right, padding, margin)
  - Use transform instead
- Create animations >600ms unless special reason
  - Users will find it slow/annoying
- Stack too many delays
  - Users won't wait for content to animate in
- Ignore prefers-reduced-motion
  - Accessibility requirement
- Animate during loading/processing
  - Content shouldn't be hidden by animation

### Do:
- Use GPU-accelerated properties only (transform, opacity)
- Keep animations <500ms for scroll triggers
- Use consistent easing across site
- Test on real mobile devices
- Always provide instant fallback for reduced motion

---

## Checklist for New Animations

Before committing:

- [ ] Used correct pattern for use case
- [ ] Timing feels natural (not too fast/slow)
- [ ] GPU-accelerated only (transform/opacity)
- [ ] 60fps on Chrome DevTools (Performance tab)
- [ ] Tested with prefers-reduced-motion enabled
- [ ] Keyboard navigation unaffected
- [ ] Mobile responsive (tested on 375px width)
- [ ] Commented why animation was added
- [ ] Animation serves purpose (not decorative)
- [ ] Documentation updated in animations.md

---

## Accessibility Compliance

### Required for All Animations:

1. **Reduced Motion Support**
   - Automatically handled by AnimateOnScroll components
   - motion components need manual check:
   ```tsx
   const shouldReduceMotion = useReducedMotion()
   if (shouldReduceMotion) return <>{children}</> // no animation
   ```

2. **No Content Hiding**
   - Animations must not hide critical content
   - Use opacity 0→1, not visibility
   - Content visible before animation completes

3. **No Focus Trapping**
   - Animations don't change tab order
   - Links/buttons remain accessible during animation
   - Form fields not blocked by animations

---

## Performance Tips

### Optimization Techniques:

1. **Use IntersectionObserver (automatic)**
   - Scroll animations trigger only on viewport entry
   - once: true prevents re-animation

2. **Avoid Animating Everything**
   - Less is more
   - Animate 1-2 key elements per section
   - Let static content exist

3. **Mobile Considerations**
   - Shorter animations on small screens (optional)
   - Test on real Pixel 5 / iPhone 12
   - Check battery drain impact

4. **Stagger Wisely**
   - Faster stagger for dense grids (50-70ms)
   - Slower stagger for large items (100-150ms)
   - Match user scrolling speed

---

## Examples by Page Type

### Homepage Pattern
```tsx
{/* Hero Section - Staggered Hero Pattern */}
<HeroSection>
  <motion.h1 delay={0ms} />
  <motion.p delay={100ms} />
  <motion.div delay={200ms} /> {/* buttons */}
</HeroSection>

{/* Services - Staggered Grid Pattern */}
<StaggerContainer>
  {services.map((s) => <StaggerItem><ServiceCard /></StaggerItem>)}
</StaggerContainer>
```

### Landing Page Pattern
```tsx
{/* Headline */}
<AnimateOnScroll><h1>Headline</h1></AnimateOnScroll>

{/* Description */}
<AnimateOnScroll delay={0.1}><p>Description</p></AnimateOnScroll>

{/* Feature Grid */}
<StaggerContainer>
  {features.map((f) => <StaggerItem><FeatureCard /></StaggerItem>)}
</StaggerContainer>
```

### About Page Pattern
```tsx
{/* About intro */}
<AnimateOnScroll><h2>About Us</h2></AnimateOnScroll>

{/* Values grid */}
<StaggerContainer delayChildren={0.1} staggerChildren={0.1}>
  {values.map((v) => <StaggerItem><ValueCard /></StaggerItem>)}
</StaggerContainer>

{/* Team cards */}
<StaggerContainer>
  {team.map((t) => <StaggerItem><TeamCard /></StaggerItem>)}
</StaggerContainer>
```

---

## Framer Motion Quick Reference

### Key Properties:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}      // start state
  animate={{ opacity: 1, y: 0 }}       // end state
  whileInView={{ ... }}                 // on viewport entry
  viewport={{ once: true, margin: "-100px" }}
  transition={{
    duration: 0.5,                      // in seconds
    ease: [0.22, 1, 0.36, 1],          // cubic-bezier
    delay: 0.1,                         // seconds
    staggerChildren: 0.1,               // for containers
  }}
>
  Content
</motion.div>
```

### Transform Values (GPU-accelerated):
```tsx
x: 10              // translateX(10px)
y: 10              // translateY(10px)
scale: 1.1         // scale(1.1)
rotate: 45         // rotate(45deg)
opacity: 0.5       // opacity: 0.5
```

---

## Need Help?

1. **Animation reference:** See `.claude/docs/features/animations.md`
2. **Code examples:** Check app/page.tsx, leistungen/page.tsx
3. **Framer Motion docs:** https://www.framer.com/motion/
4. **Accessibility:** https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions

---

**Last Updated:** 2025-11-01
**Framer Motion Version:** 12.23.24
**Compatibility:** Next.js 16+, React 18+
