export const fadeIn = (direction, delay) => {
    return{
        hidden: { 
            y: direction === 'up'   ? 12 : direction === 'down' ? -12 : 0, opacity: 0,
            X: direction === 'left' ? 12 : direction === 'right' ? -12 : 0, opacity: 0,
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
                    type: 'tween',
                    duration: 1.2,
                    delay: delay, 
                    ease: [0.25, 0.25, 0.25, 0.75],
                }
        }
    }
};