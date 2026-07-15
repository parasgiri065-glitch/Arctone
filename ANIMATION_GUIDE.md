# ArcTone Animation System Guide

## Overview
Your ArcTone website now features **professional-grade animations** powered by Framer Motion. Every element animates beautifully with smooth transitions, scroll reveals, floating effects, parallax scrolling, and interactive micro-interactions.

---

## Animation Components Created

### 1. **AnimatedText** ✨
Animated word-by-word text reveal with stagger effect.

**Features:**
- Individual word animations with fade-in + slide-up
- Staggered delay between words
- Scroll-triggered reveal
- Customizable duration and delay

**Usage:**
```jsx
<AnimatedText 
  text="You Just Film. We Turn You Into An Authority." 
  className="text-5xl font-bold"
  delay={0.2}
  duration={0.5}
/>
```

**Where it's used:**
- Hero section headline
- "You Know the Struggle" heading
- "Here's What We Do" heading
- All major section titles

---

### 2. **ScrollReveal** 👁️
Elements fade and slide into view as they enter the viewport.

**Features:**
- Directional animations (up, down, left, right)
- Customizable scroll trigger margin
- One-time animation (once: true)
- Smooth ease-out transitions

**Usage:**
```jsx
<ScrollReveal direction="up" delay={0.1}>
  <h2>Your Content Here</h2>
</ScrollReveal>
```

**Where it's used:**
- "Trusted by founders & coaches" section
- "You Know the Struggle" heading
- "Here's What We Do" heading
- "45-Day Authority Guarantee" section

---

### 3. **FloatingCard** 🎈
Cards that gently bob up and down with hover interaction.

**Features:**
- Continuous floating animation (2-3 second duration)
- Hover scale-up effect
- Y-axis movement
- Perfect for pricing cards and featured items

**Usage:**
```jsx
<FloatingCard delay={0} speed={3}>
  <div className="pricing-card">...</div>
</FloatingCard>
```

**Where it's used:**
- Standard & Launch Offer pricing cards (elevated effect!)
- Creates visual interest without distraction

---

### 4. **ParallaxSection** 🌌
Background parallax effect as user scrolls.

**Features:**
- Scroll-based Y position transform
- Smooth movement offset
- Great for hero sections and backgrounds
- Performance optimized

**Usage:**
```jsx
<ParallaxSection offset={50}>
  <div className="hero-content">...</div>
</ParallaxSection>
```

**Where it's used:**
- Hero section title and content
- Creates depth as user scrolls

---

### 5. **StaggerChildren** 📊
Container that staggers animation of multiple children.

**Features:**
- Automatic stagger delay between items
- Fade-in + slide-up effect
- Perfect for lists and grids
- Viewport-triggered

**Usage:**
```jsx
<StaggerChildren staggerDelay={0.1} delayChildren={0.1}>
  {items.map((item, i) => <div key={i}>{item}</div>)}
</StaggerChildren>
```

**Where it's used:**
- Pain Points cards (6 items stagger)
- Solution cards (6 items stagger)
- Workflow steps (5 items stagger)
- Timeline items (3 items stagger)

---

### 6. **CountUp** 🔢
Animated number counter from one value to another.

**Features:**
- Smooth counting animation
- Customizable start and end values
- Duration control
- Perfect for statistics

**Usage:**
```jsx
<CountUp to={20} duration={2} suffix="+" className="text-5xl" />
```

**Where it's used:**
- Trust section stats (20, 2hrs, 5)
- Counts up as it enters viewport

---

## Section-by-Section Animation Breakdown

### Header
- **Animation**: Slides down from top (translateY: -100px → 0)
- **Duration**: 0.8s ease-out
- **Logo**: Scale up on hover (1 → 1.1)
- **Button**: Scale + glow on hover

### Hero Section
- **Title**: Word-by-word reveal with stagger
- **Badge**: Scale-in + pulsing opacity
- **Description**: Fade-in + slide-up (0.6s delay)
- **CTA Button**: Fade-in + slide-up (0.8s delay), glowing hover
- **Background Circles**: Floating blob animations (8s & 10s durations)
- **Parallax**: Content moves slower than scroll

### Trust Section
- **Heading**: Pulsing opacity animation
- **Stats Cards**: Floating with individual delays + count-up numbers
- **Card Hover**: Scale up + glow effect

### Pain Points Section
- **Heading**: Word-by-word animated text reveal
- **Cards**: Staggered entrance from bottom
  - Emoji: Floating bob + rotate animation
  - Each card: Hover effect with border/glow color change
  - Stagger delay: 0.1s between each card

### Solution Section
- **Heading**: Word-by-word animated reveal
- **Cards**: Staggered entrance with scale animation
  - Number: Scales up on animation (1 → 1.2 → 1)
  - Card: Hover with orange border + glow
  - Stagger delay: 0.12s between items

### Workflow Section
- **Each Step**: 
  - Hover: Slides right (x: +10px)
  - Badge: Scales on hover with glow
  - Timeline visual effect

### Pricing Section
- **Cards**: Floating animation with different delays
- **Standard Card**: Border color glow on hover
- **Launch Offer Card**: 
  - Shimmer effect (gradient sweeping across)
  - Badge: Pulsing scale animation
  - Premium styling with full hover glow
  - Button: Enhanced hover effect

### Comparison Table
- **Title**: Word-by-word reveal
- **Table**: Fade-in + slide-up on scroll
- **Rows**: Staggered slide-in from left with hover background
- **Check marks**: Scale animation on viewport entry

### Timeline Section
- **Heading**: Word-by-word reveal
- **Timeline Items**: Staggered entrance
  - Icon: Floating + rotating animation
  - Background: Gradient background with hover effect
  - Text: Pulsing opacity for time period

### FAQ Section
- **Heading**: Word-by-word reveal
- **FAQClient**: Standard component styling

### Guarantee Section
- **Heading**: Word-by-word reveal
- **Description**: Fade-in + slide-up
- **Box**: Scale-in (0.8 → 1) with pulse animation on text

### Final CTA Section
- **"Only 3 Spots" Badge**: Pulsing opacity + scale
- **Heading**: Word-by-word reveal
- **Description**: Fade-in + slide-up (0.3s delay)
- **Button**: Scale-in (0.4s delay), enhanced hover with 1.15x scale

### Footer
- **Columns**: Staggered fade-in from bottom (delays: 0s, 0.1s, 0.2s, 0.3s)
- **Links**: Slide-right + color change on hover
- **Message Button**: Scale + glow on hover
- **Copyright**: Pulsing opacity animation

---

## Animation Techniques Used

### 1. **Scroll-Triggered Animations**
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-50px' }}
```
- Elements animate only when entering viewport
- `once: true` ensures animation runs only once
- `margin: '-50px'` triggers animation 50px before element enters

### 2. **Staggered Animations**
```jsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
```
- Children animate sequentially with delay
- Creates flowing, professional look

### 3. **Hover Effects**
```jsx
whileHover={{ 
  scale: 1.05,
  boxShadow: '0 0 20px rgba(255, 107, 53, 0.6)',
}}
whileTap={{ scale: 0.95 }}
```
- Scale on hover
- Glow effects with orange shadow
- Press effect with smaller scale

### 4. **Continuous Animations**
```jsx
animate={{ opacity: [1, 0.7, 1] }}
transition={{ duration: 2, repeat: Infinity }}
```
- Pulsing, breathing effects
- Repeats infinitely
- Great for CTAs and badges

### 5. **Floating/Bobbing**
```jsx
animate={{ y: [0, -20, 0] }}
transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
```
- Gentle up-and-down motion
- Very natural movement

### 6. **Parallax Scrolling**
```jsx
const { scrollYProgress } = useScroll({ target: ref });
const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
```
- Based on scroll position
- Creates depth effect

---

## Animation Performance Tips

### ✅ What's Optimized:
- **CSS-based animations** for hardware acceleration
- **`will-change` not needed** - Framer Motion handles it
- **`once: true`** prevents animation from re-running
- **Proper easing functions** for smooth motion
- **Staggered delays** instead of simultaneous animations

### ⚡ Performance Best Practices:
1. Use `opacity` and `transform` for smooth 60fps animations
2. Avoid animating `width`, `height`, `left`, `right`
3. Use `viewport={{ once: true }}` to reduce calculations
4. Keep stagger delays under 0.2s for snappy feel
5. Use `ease: 'easeInOut'` for natural motion

---

## Customization Guide

### Change Animation Speed
```jsx
// Make everything faster
transition={{ duration: 0.4 }} // default: 0.6-0.8

// Make entrance slower
transition={{ duration: 1.2 }}
```

### Change Scroll Trigger Margin
```jsx
// Trigger earlier
viewport={{ once: true, margin: '-200px' }}

// Trigger later
viewport={{ once: true, margin: '0px' }}
```

### Add More Stagger
```jsx
<StaggerChildren staggerDelay={0.2}> // default: 0.1
```

### Change Floating Speed
```jsx
<FloatingCard speed={4}> // default: 3 (slower = larger number)
```

### Change Parallax Intensity
```jsx
<ParallaxSection offset={100}> // default: 50 (more offset = more effect)
```

---

## Animation Duration Guide

| Effect | Duration | Use Case |
|--------|----------|----------|
| Word reveal | 0.4-0.6s | Text animations |
| Scroll reveal | 0.6-0.8s | Section entrance |
| Hover | 0.2-0.3s | Interactive elements |
| Floating | 2-4s | Cards, continuous motion |
| Pulsing | 1.5-3s | Badges, CTAs |
| Count-up | 2-3s | Numbers, stats |
| Parallax | Scroll-based | Background depth |

---

## Browser Support

✅ **Fully supported in:**
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

All animations use GPU-accelerated transforms and won't impact mobile performance.

---

## Framer Motion Setup

**Installed:** `framer-motion@12.38.0`

Key hooks used:
- `motion.div` - Animated container
- `motion.span` - Animated inline element
- `useScroll()` - Scroll-based animations
- `useTransform()` - Value transformation based on scroll
- `AnimatePresence` - Exit animations (if needed)

---

## Next Steps

### To Add More Animations:
1. Import components from `/components/`
2. Wrap content with desired animation
3. Customize duration, delay, direction as needed

### To Create Custom Animations:
```jsx
const customAnimation = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.8 }
  }
};

<motion.div 
  variants={customAnimation}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  Content
</motion.div>
```

---

## Animation Checklist for New Sections

When adding new sections, include:
- [ ] Scroll-triggered entrance animation
- [ ] Staggered item animations if list/grid
- [ ] Hover effects for interactive elements
- [ ] Text reveal for headlines
- [ ] Consider parallax for background depth
- [ ] Add glow effects for CTAs
- [ ] Test on mobile (reduce animation count if needed)

---

**Total Animations on Page:** 50+
**Animation Components:** 6 reusable components
**Framework:** Framer Motion 12.38.0
**Status:** Production Ready ✅

Enjoy your super-animated website! 🚀✨
