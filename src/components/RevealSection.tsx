import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
    duration?: number;
}

/**
 * RevealSection component - Animates content when it enters the viewport
 * 
 * @param children - The content to animate
 * @param className - Additional CSS classes
 * @param delay - Animation delay in seconds (default: 0)
 * @param direction - Animation direction: 'up', 'down', 'left', 'right', 'fade' (default: 'up')
 * @param duration - Animation duration in seconds (default: 0.6)
 */
const RevealSection = ({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    duration = 0.6
}: RevealSectionProps) => {
    const ref = useRef(null);

    // Detect when element enters viewport
    const isInView = useInView(ref, {
        once: true,              // Animate only once
        margin: "200px",         // Start animation 200px BEFORE entering viewport
        amount: 0.2              // Trigger when only 10% of element is visible
    });

    // Define animation variants based on direction
    const variants = {
        up: {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
        },
        down: {
            hidden: { opacity: 0, y: -40 },
            visible: { opacity: 1, y: 0 }
        },
        left: {
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 }
        },
        right: {
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0 }
        },
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[direction]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1] // Smooth cubic-bezier easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default RevealSection;
