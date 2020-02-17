const navSlide = () => {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `linkFadeIn 0.5s ease forwards ${index / 2.5}s`
            };
        });

        //Burger animation
        burger.classList.toggle('cross');
    });

};

navSlide();