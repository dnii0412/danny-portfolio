export const fadeIn = (direction, delay) => {
    return{
        hidden: { 
            y: direction === 'up'   ? 12 : direction === 'down' ? -12 : 0, opacity: 0,
            X: direction === 'left' ? 64 : direction === 'right' ? -64 : 12, opacity: 0,
        },
        hiddenLong:{
            y: direction === 'up'   ? 24 : direction === 'down' ? -24 : 0, opacity: 0,
            X: direction === 'left' ? 24 : direction === 'right' ? -24 : 0, opacity: 0,  
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
                transition:{
                    type: 'spring',
                    duration:1.2,
                    delay: delay, 
                    ease: [0.25, 0.1, 0.25, 1],
                    // damping: 12,
                    // stiffness: 100,
                }
        },
        showQuick: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 0.6,  // Quicker duration
                delay: delay / 2,  // Shorter delay
                ease: [0.42, 0, 0.58, 1],  // Different easing function
                damping: 10,
            }
        },
        showDelayed: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.5,  // Longer duration
                delay: delay + 0.5,  // Extra delay
                ease: [0.42, 0, 0.58, 1],  // Different easing function
                damping: 15,
            }
        },
        showWithBounce: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.2,
                delay: delay, 
                ease: [0.25, 0.1, 0.25, 1],
                damping: 8,  // Lower damping for more bounce
                stiffness: 120,  // Stiffer spring for bouncier effect
            }
        },
    }
};