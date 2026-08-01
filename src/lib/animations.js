/**
 * Global Framer Motion Animation Variants
 * Premium, reusable animation system for SNK Build Fabric Solutions
 */

// ─── Responsive helpers ───────────────────────────────────────────
const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

const dur = (desktop = 0.6) => isMobile() ? Math.max(desktop * 0.65, 0.3) : desktop;

// ─── Core Variants ────────────────────────────────────────────────

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: dur(0.6),
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      duration: dur(0.5),
      delay: i * 0.1,
      ease: 'easeOut',
    },
  }),
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: dur(0.7), ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: dur(0.7), ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: dur(0.5),
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const scaleBounce = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: i * 0.12,
    },
  }),
};

// ─── Container Variants (for stagger) ─────────────────────────────

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

// ─── Children Variants (used inside stagger containers) ───────────

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: dur(0.5),
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ─── 3D Card Hover (for mouse-tracking) ───────────────────────────

export const cardHover3D = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// ─── Hero-specific Variants ───────────────────────────────────────

export const heroZoom = {
  initial: { scale: 1 },
  animate: {
    scale: 1.08,
    transition: { duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' },
  },
};

export const heroContent = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const heroChild = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: dur(0.7), ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const heroButtonStagger = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: dur(0.5),
      delay: 0.6 + i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// ─── Line/Progress Variants ───────────────────────────────────────

export const lineGrow = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: dur(1.2), ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Viewport defaults ────────────────────────────────────────────

export const viewportOnce = { once: true, margin: "-50px" };
export const viewportRepeat = { once: false, margin: "-50px" };
