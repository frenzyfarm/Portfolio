// Configuration et initialisation de Particles.js
particlesJS('particles-container', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00ff00'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff00',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: false
            },
            onclick: {
                enable: false
            },
            resize: true
        }
    },
    retina_detect: true
});

// Animation de texte avec Typed.js
document.addEventListener('DOMContentLoaded', function() {
    // Configuration des particules
    particlesJS('particles-container', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00ff00'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00ff00',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: false
                },
                onclick: {
                    enable: false
                },
                resize: true
            }
        },
        retina_detect: true
    });

    // Animation de la console
    const terminalText = document.getElementById('terminal-text');
    const commandOutput = document.getElementById('command-output');
    const whoamiCommand = 'whoami';
    let index = 0;

    function typeWhoami() {
        if (index < whoamiCommand.length) {
            terminalText.textContent += whoamiCommand.charAt(index);
            index++;
            setTimeout(typeWhoami, Math.random() * 100 + 50);
        } else {
            setTimeout(() => {
                const outputText = [
                    `<span style="color: #4CAF50; font-size: 1.8rem;">Name:</span> <span style="color: #fff; font-size: 1.8rem; display: inline-block;">Baptiste LAUR</span>`,
                    `<span style="color: #4CAF50; font-size: 1.6rem;">Status:</span> <span style="color: #fff; font-size: 1.6rem;">First Year Student</span>`,
                    `<span style="color: #4CAF50; font-size: 1.6rem;">School:</span> <span style="color: #fff; font-size: 1.6rem;">Guardia Cybersecurity School</span>`,
                    `<span style="color: #4CAF50; font-size: 1.6rem;">Program:</span> <span style="color: #fff; font-size: 1.6rem;">Computer Science & Cybersecurity</span>`
                ];

                let currentLine = 0;
                function typeLine() {
                    if (currentLine < outputText.length) {
                        const line = document.createElement('div');
                        line.style.opacity = '0';
                        line.style.transform = 'translateX(-20px)';
                        line.innerHTML = outputText[currentLine];
                        commandOutput.appendChild(line);

                        requestAnimationFrame(() => {
                            line.style.transition = 'all 0.3s ease';
                            line.style.opacity = '1';
                            line.style.transform = 'translateX(0)';
                        });

                        currentLine++;
                        setTimeout(typeLine, 200);
                    } else {
                        terminalText.classList.remove('active');
                        startTypedAnimation();
                    }
                }
                typeLine();
            }, 300);
        }
    }

    function startTypedAnimation() {
        new Typed('#typed-text', {
            strings: [
                '<span style="color: #4CAF50; font-size: 1.8rem; text-shadow: 0 0 10px #4CAF50;">la Cybersécurité</span>',
                '<span style="color: #4CAF50; font-size: 1.8rem; text-shadow: 0 0 10px #4CAF50;">le Pentesting</span>',
                '<span style="color: #4CAF50; font-size: 1.8rem; text-shadow: 0 0 10px #4CAF50;">le Réseau</span>',
                '<span style="color: #4CAF50; font-size: 1.8rem; text-shadow: 0 0 10px #4CAF50;">le Développement</span>',
                '<span style="color: #4CAF50; font-size: 1.8rem; text-shadow: 0 0 10px #4CAF50;">la Sécurité Web</span>',
                '<span style="color: #4CAF50; font-size: 1.8rem; text-shadow: 0 0 10px #4CAF50;">le Reverse Engineering</span>',
                '<span style="color: #4CAF50; font-size: 1.8rem; text-shadow: 0 0 10px #4CAF50;">le Bug Bounty</span>'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: '_',
            autoInsertCss: true
        });
    }

    // Animation au scroll pour les cartes
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-card, .project-card').forEach(card => {
        observer.observe(card);
    });

    // Animation des badges
    document.querySelectorAll('.badge').forEach(badge => {
        badge.addEventListener('mouseover', function() {
            this.style.transform = `rotate(${Math.random() * 10 - 5}deg) scale(1.2)`;
        });
        
        badge.addEventListener('mouseout', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    });

    // Animation des icônes sociales
    // document.querySelectorAll('.social-link').forEach(link => {
    //     link.addEventListener('mouseover', function() {
    //         this.querySelector('i').style.animation = 'socialPulse 0.5s ease infinite';
    //     });
    //     
    //     link.addEventListener('mouseout', function() {
    //         this.querySelector('i').style.animation = 'none';
    //     });
    // });

    // Démarrer l'animation du terminal
    terminalText.classList.add('active');
    setTimeout(typeWhoami, 1000);
});

// Effet glitch sur le titre
const glitchText = document.querySelector('.text-gradient');
let glitchInterval;

glitchText.addEventListener('mouseover', () => {
    clearInterval(glitchInterval);
    glitchInterval = setInterval(() => {
        glitchText.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px #ff0000,
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px #0000ff
        `;
    }, 50);
});

glitchText.addEventListener('mouseout', () => {
    clearInterval(glitchInterval);
    glitchText.style.textShadow = 'none';
}); 