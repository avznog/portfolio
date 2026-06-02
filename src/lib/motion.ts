import type { Transition, Variants } from "motion/react";

// Soft "settle" easing — the flowing feel.
export const easeFlow: Transition["ease"] = [0.22, 1, 0.36, 1];

export const morphTransition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.9,
};

export const detailContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.12, staggerChildren: 0.05 },
  },
};

export const detailItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeFlow } },
};

export const gridStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export const tileIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeFlow } },
};
