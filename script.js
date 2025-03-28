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

// Configuration des particules pour les pages de projets
const projectParticlesConfig = {
    pentesting: {
        particles: {
            number: { value: 120, density: { enable: true, value_area: 800 } },
            color: { value: '#ff0000' },
            shape: { type: 'triangle' },
            opacity: { value: 0.7, random: true },
            size: { value: 5, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ff0000',
                opacity: 0.5,
                width: 2
            },
            move: {
                enable: true,
                speed: 4,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: true
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        }
    },
    webDev: {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: '#00ff00' },
            shape: { type: 'circle' },
            opacity: { value: 0.6, random: true },
            size: { value: 4, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00ff00',
                opacity: 0.4,
                width: 2
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: true
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        }
    },
    reseau: {
        particles: {
            number: { value: 110, density: { enable: true, value_area: 800 } },
            color: { value: '#0000ff' },
            shape: { type: 'edge' },
            opacity: { value: 0.6, random: true },
            size: { value: 4, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#0000ff',
                opacity: 0.5,
                width: 2
            },
            move: {
                enable: true,
                speed: 3.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: true
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'bubble' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        }
    },
    reverse: {
        particles: {
            number: { value: 90, density: { enable: true, value_area: 800 } },
            color: { value: '#ffff00' },
            shape: { type: 'star' },
            opacity: { value: 0.6, random: true },
            size: { value: 4, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffff00',
                opacity: 0.5,
                width: 2
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: true
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        }
    }
};

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

    // Initialisation des particules selon la page
    const body = document.body;
    const particlesContainer = document.getElementById('particles-container');
    
    if (particlesContainer) {
        if (body.classList.contains('pentesting')) {
            particlesJS('particles-container', projectParticlesConfig.pentesting);
        } else if (body.classList.contains('web-dev')) {
            particlesJS('particles-container', projectParticlesConfig.webDev);
        } else if (body.classList.contains('reseau')) {
            particlesJS('particles-container', projectParticlesConfig.reseau);
        } else if (body.classList.contains('reverse')) {
            particlesJS('particles-container', projectParticlesConfig.reverse);
        }
    }

    // Animation des cartes de projet avec effets spécifiques
    const projectCards = document.querySelectorAll('.project-card, .tech-item, .arch-card, .feature-card, .infra-card, .security-card, .analysis-card, .methodology-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const body = document.body;
            let glowColor = '#00ff00';
            
            if (body.classList.contains('pentesting')) {
                glowColor = '#ff0000';
            } else if (body.classList.contains('web-dev')) {
                glowColor = '#00ff00';
            } else if (body.classList.contains('reseau')) {
                glowColor = '#0000ff';
            } else if (body.classList.contains('reverse')) {
                glowColor = '#ffff00';
            }

            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2), 0 0 15px ${glowColor}`;
            this.style.borderColor = glowColor;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            this.style.borderColor = 'var(--primary-color)';
        });
    });

    // Animation des titres de section avec effets spécifiques
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            const body = document.body;
            let glowColor = '#00ff00';
            
            if (body.classList.contains('pentesting')) {
                glowColor = '#ff0000';
            } else if (body.classList.contains('web-dev')) {
                glowColor = '#00ff00';
            } else if (body.classList.contains('reseau')) {
                glowColor = '#0000ff';
            } else if (body.classList.contains('reverse')) {
                glowColor = '#ffff00';
            }

            this.style.transform = 'scale(1.05)';
            this.style.textShadow = `0 0 10px ${glowColor}, 0 0 20px ${glowColor}`;
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.textShadow = 'none';
        });
    });

    // Animation des icônes avec rotation
    const icons = document.querySelectorAll('.infra-icon, .security-icon, .analysis-icon, .methodology-icon');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg)';
        });
    });

    // Animation du bouton retour
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('mouseenter', function() {
            const body = document.body;
            let glowColor = '#00ff00';
            
            if (body.classList.contains('pentesting')) {
                glowColor = '#ff0000';
            } else if (body.classList.contains('web-dev')) {
                glowColor = '#00ff00';
            } else if (body.classList.contains('reseau')) {
                glowColor = '#0000ff';
            } else if (body.classList.contains('reverse')) {
                glowColor = '#ffff00';
            }

            this.style.transform = 'translateY(-5px) scale(1.1)';
            this.style.boxShadow = `0 0 20px ${glowColor}`;
        });
        
        backButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.3)';
        });
    }
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