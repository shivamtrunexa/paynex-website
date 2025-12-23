import { ReactNode, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface SmoothScrollProps {
  children: ReactNode;
}

/**
 * SmoothScroll component - Provides smooth scrolling behavior and progress indicator
 * 
 * Features:
 * - Native smooth scrolling
 * - Animated progress bar at top of page
 * - Hidden scrollbar (maintains scroll functionality)
 */
const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const { scrollYProgress } = useScroll();

  // Create smooth spring animation for scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Hide scrollbar while maintaining functionality
    const style = document.createElement('style');
    style.textContent = `
      /* Hide scrollbar for Chrome, Safari and Opera */
      ::-webkit-scrollbar {
        display: none;
      }
      
      /* Hide scrollbar for IE, Edge and Firefox */
      * {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Animated progress bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1876F4] to-[#4A9FF5] origin-left z-50"
        style={{ scaleX }}
      />
      {children}
    </>
  );
};

export default SmoothScroll;
