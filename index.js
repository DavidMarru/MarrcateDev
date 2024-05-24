document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav a");
    const sections = document.querySelectorAll("section");
    const animatedElementRight = document.getElementById('animated-element-right');
    const animatedElementLeft = document.getElementById('animated-element-left');

    function scrollToTarget(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const currentSection = document.querySelector("section:not(.fade-out)");
            if (currentSection && currentSection.id !== targetId) {
                addFadeOutClass(currentSection);
            }

            
            targetElement.classList.remove("fade-out");
            targetElement.classList.add("fade-in");

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
            });
        }
    }

    function addFadeOutClass(section) {
        section.classList.add("fade-out");
        setTimeout(() => {
            section.classList.remove("fade-out");
        }, 1000); 
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            scrollToTarget(targetId);
        });
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault();

            const currentSectionIndex = Array.from(sections).findIndex(
                (section) => section.getBoundingClientRect().top >= 0
            );

            if (e.key === "ArrowUp" && currentSectionIndex > 0) {
                const targetId = sections[currentSectionIndex - 1].id;
                addFadeOutClass(sections[currentSectionIndex]);
                scrollToTarget(targetId);
            } else if (e.key === "ArrowDown" && currentSectionIndex < sections.length - 1) {
                const targetId = sections[currentSectionIndex + 1].id;
                addFadeOutClass(sections[currentSectionIndex]);
                scrollToTarget(targetId);
            }
        }
    });

    const observerRight = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (entry.intersectionRatio > 0.5) {
                animatedElementRight.classList.add('fadeInRight');
                animatedElementRight.classList.remove('fadeOutRight')
            } else {
                animatedElementRight.classList.remove('fadeInRight');
                animatedElementRight.classList.add('fadeOutRight');

            }
        });
    }, { threshold: 0.5 }); 

    observerRight.observe(animatedElementRight);

    const observerLeft = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.5) {
                animatedElementLeft.classList.add('fadeInLeft');
                animatedElementLeft.classList.remove('fadeOutLeft')
            } else {
                animatedElementLeft.classList.remove('fadeInLeft');
                animatedElementLeft.classList.add('fadeOutLeft');

            }
        });
    }, { threshold: 0.5 }); 

    observerLeft.observe(animatedElementLeft);
});
