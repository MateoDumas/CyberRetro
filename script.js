        // Loading Screen
        document.addEventListener('DOMContentLoaded', () => {
            const progress = document.querySelector('.progress');
            const loadingScreen = document.querySelector('.loading-screen');
            
            let width = 0;
            const interval = setInterval(() => {
                width += Math.random() * 30;
                if (width > 100) {
                    width = 100;
                    clearInterval(interval);
                    setTimeout(() => {
                        loadingScreen.style.opacity = 0;
                        setTimeout(() => {
                            loadingScreen.style.display = 'none';
                        }, 500);
                    }, 500);
                }
                progress.style.width = width + '%';
            }, 200);
        });

        // Cursor Trail Effect
        const createCursorTrail = () => {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            document.body.appendChild(trail);
            setTimeout(() => {
                trail.remove();
            }, 500);
        };

        document.addEventListener('mousemove', (e) => {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = e.pageX + 'px';
            trail.style.top = e.pageY + 'px';
            document.body.appendChild(trail);
            setTimeout(() => {
                trail.remove();
            }, 500);
        });

        // Star Background
        const createStars = () => {
            const starsContainer = document.querySelector('.stars');
            const numberOfStars = 200;

            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.width = Math.random() * 3 + 'px';
                star.style.height = star.style.width;
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        };

        createStars();

        // Glitch Effect on Hover
        const glitchTitle = document.querySelector('.glitch-title');
        let glitchInterval;

        glitchTitle.addEventListener('mouseenter', () => {
            glitchInterval = setInterval(() => {
                glitchTitle.style.textShadow = `
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px var(--primary),
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px var(--secondary)
                `;
            }, 50);
        });

        glitchTitle.addEventListener('mouseleave', () => {
            clearInterval(glitchInterval);
            glitchTitle.style.textShadow = '2px 2px var(--primary), -2px -2px var(--secondary)';
        });
