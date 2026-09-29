/* =========================================================
   PUNISHER PORTFOLIO
========================================================= */


const sections = document.querySelectorAll("section");
const indexItems = document.querySelectorAll(".index-item");


/* =========================================================
   SECTION INDEX
========================================================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const id = entry.target.id;

            let index = 0;

            switch (id) {

                case "home":
                case "origin":
                    index = 0;
                    break;

                case "arsenal":
                    index = 1;
                    break;

                case "missions":
                    index = 2;
                    break;

                case "training":
                    index = 3;
                    break;

                case "cv":
                    index = 4;
                    break;

                case "contact":
                    index = 5;
                    break;

            }


            indexItems.forEach(item => {
                item.classList.remove("active");
            });


            if (indexItems[index]) {
                indexItems[index].classList.add("active");
            }

        });

    },

    {
        threshold: .45
    }

);


sections.forEach(section => {
    observer.observe(section);
});


/* =========================================================
   HEADER SCROLL — CINEMATIC
========================================================= */

const header = document.querySelector(".site-header");

if (header) {

    const updateHeader = () => {

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );
}


/* =========================================================
   HERO PARALLAX
========================================================= */

const heroBackground =
    document.querySelector(".hero-background");

if (heroBackground) {

    let ticking = false;

    const updateParallax = () => {

        const scroll =
            Math.min(window.scrollY, 700);

        heroBackground.style.transform =
            `scale(1.035) translateY(${scroll * 0.055}px)`;

        ticking = false;
    };

    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(
                    updateParallax
                );

                ticking = true;
            }

        },
        { passive: true }
    );

}







/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".tool-card, .mission-card, .training-card, .cv-box"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                revealObserver.unobserve(
                    entry.target
                );

            });

        },

        {
            threshold: .12
        }

    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});