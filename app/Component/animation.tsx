"use client";

import type { ReactNode } from "react";
import { motion, MotionConfig, type Variants } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type BoxProps = { children: ReactNode; className?: string };

// Wrap the page once. People who turn on "reduce motion" in their
// device settings get fades only, with no sliding or floating.
export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

// Fades and slides up. Plays on page load, or when scrolled into view if inView is set.
export function Rise({
  children,
  className,
  delay = 0,
  inView = false,
}: BoxProps & { delay?: number; inView?: boolean }) {
  const hidden = { opacity: 0, y: 24 };
  const shown = { opacity: 1, y: 0 };
  const transition = { duration: 0.6, delay, ease };

  return inView ? (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.3 }}
      transition={transition}
    >
      {children}
    </motion.div>
  ) : (
    <motion.div
      className={className}
      initial={hidden}
      animate={shown}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

// The ID card: swings in from a steeper tilt, then floats gently.
export function HeroCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 8 }}
      animate={{ opacity: 1, y: 0, rotate: 2 }}
      transition={{ duration: 0.8, delay: 0.3, ease }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// A list whose items appear one after another when it scrolls into view.
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export function Group({ children, className }: BoxProps) {
  return (
    <motion.ul
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.ul>
  );
}

export function Item({ children, className }: BoxProps) {
  return (
    <motion.li className={className} variants={item}>
      {children}
    </motion.li>
  );
}