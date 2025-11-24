// ==========================================================================
// Birthday Effects - Confetti, Sparkles & 3D Animations
// ==========================================================================

// --------------------------------------------------------------------------
// Confetti System
// --------------------------------------------------------------------------
const launchConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // Confetti from both sides
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors: ['#ff69b4', '#ff1493', '#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff']
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors: ['#ff69b4', '#ff1493', '#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff']
        });
    }, 250);
};

// Heart confetti burst
const heartConfetti = () => {
    const heart = confetti.shapeFromPath({
        path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
    });

    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 8;

        // Hearts from both sides
        confetti({
            particleCount,
            spread: 60,
            origin: { x: 0, y: 0.5 },
            shapes: [heart],
            colors: ['#ff0000', '#ff1744', '#e91e63', '#ff4081', '#f50057'],
            scalar: 2,
            zIndex: 1000,
            startVelocity: 45,
            gravity: 0.8,
            ticks: 200
        });
        confetti({
            particleCount,
            spread: 60,
            origin: { x: 1, y: 0.5 },
            shapes: [heart],
            colors: ['#ff0000', '#ff1744', '#e91e63', '#ff4081', '#f50057'],
            scalar: 2,
            zIndex: 1000,
            startVelocity: 45,
            gravity: 0.8,
            ticks: 200
        });
        // Hearts from top
        confetti({
            particleCount: particleCount / 2,
            spread: 100,
            origin: { x: 0.5, y: 0 },
            shapes: [heart],
            colors: ['#ff0000', '#ff1744', '#e91e63', '#ff4081', '#f50057'],
            scalar: 2,
            zIndex: 1000,
            startVelocity: 30,
            gravity: 1,
            ticks: 200
        });
    }, 200);
};

// Birthday cannon burst
const birthdayCannon = () => {
    const count = 200;
    const defaults = {
        origin: { y: 0.7 },
        zIndex: 1000
    };

    const fire = (particleRatio, opts) => {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
            colors: ['#ff69b4', '#ff1493', '#ffd700', '#ff6b6b', '#a855f7', '#3b82f6']
        });
    };

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
};

// Fireworks effect
const fireworks = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
        if (Date.now() > animationEnd) {
            return clearInterval(interval);
        }

        confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 360,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            },
            colors: ['#ff69b4', '#ffd700', '#ff6b6b', '#00ff88', '#00d4ff', '#a855f7'],
            zIndex: 1000
        });
    }, 300);
};

// --------------------------------------------------------------------------
// Sparkle System
// --------------------------------------------------------------------------
const createSparkles = () => {
    const sparklesContainer = document.getElementById('sparkles');
    if (!sparklesContainer) return;

    const createSparkle = () => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkle.style.animationDuration = (Math.random() * 1 + 1) + 's';
        sparklesContainer.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 3000);
    };

    // Create sparkles periodically
    setInterval(createSparkle, 200);
};

// --------------------------------------------------------------------------
// 3D Elements Animation
// --------------------------------------------------------------------------
const animate3DElements = () => {
    // Animate floating shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        gsap.to(shape, {
            y: "random(-30, 30)",
            x: "random(-20, 20)",
            rotation: "random(-15, 15)",
            duration: 3 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    // Animate gift box
    const giftBox = document.querySelector('.gift-box');
    if (giftBox) {
        gsap.fromTo(giftBox,
            { scale: 0, rotation: -180, opacity: 0 },
            {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 1,
                delay: 0.5,
                ease: "back.out(1.7)"
            }
        );

        // Wobble animation
        gsap.to(giftBox, {
            rotateY: 10,
            rotateX: 5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.5
        });
    }

    // Animate 3D cake
    const cake = document.querySelector('.cake-3d');
    if (cake) {
        gsap.set(cake, { opacity: 0, scale: 0 });
    }

};

// --------------------------------------------------------------------------
// Initialize Effects
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Start sparkles
    createSparkles();

    // Initialize 3D animations
    setTimeout(animate3DElements, 100);
});

// --------------------------------------------------------------------------
// Export functions for use in main.js timeline
// --------------------------------------------------------------------------
window.birthdayEffects = {
    launchConfetti,
    birthdayCannon,
    fireworks,
    heartConfetti,

    // Trigger all effects at once
    celebrate: () => {
        birthdayCannon();
        setTimeout(launchConfetti, 500);
        setTimeout(fireworks, 2000);
    },

    // Show 3D cake with animation
    showCake: () => {
        const cake = document.querySelector('.cake-3d');
        if (cake) {
            gsap.to(cake, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.7)"
            });

            // Animate flame
            gsap.to('.flame', {
                scaleY: 1.2,
                duration: 0.3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }
};
