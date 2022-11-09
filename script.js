const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
    const menuLinks = document.querySelector('.header__links');
    const menuSign = document.querySelector('.header__right');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuLinks.classList.toggle('_active');
        menuSign.classList.toggle('_active');
    });
}

const accordeonButtons = document.querySelectorAll('.footer__panel-heading');
if (accordeonButtons) {
    const arrow = document.querySelectorAll('.footer__arrow');
    const panel = document.querySelectorAll('.footer__panel');
    for (let i = 0; i < accordeonButtons.length; i++) {
        accordeonButtons[i].addEventListener("click", function (e) {
            if (arrow[i].classList.contains('active')) {
                for (let j = 0; j < accordeonButtons.length; j++) {
                    arrow[j].classList.add('active');
                    panel[j].classList.add('active');
                };
                arrow[i].classList.remove('active');
                panel[i].classList.remove('active');
                console.log(1);
            } else {
                for (let j = 0; j < accordeonButtons.length; j++) {
                    arrow[j].classList.add('active');
                    panel[j].classList.add('active');
                };
                arrow[i].classList.add('active');
                panel[i].classList.add('active');
            }
        })
    };
}

const typesButtons = document.querySelectorAll('.explore-types__button');
if (typesButtons) {
    for (let i = 0; i < typesButtons.length; i++) {
        typesButtons[i].addEventListener("click", function (e) {
            for (let j = 0; j < typesButtons.length; j++) {
                typesButtons[j].classList.remove('active');
            };
            typesButtons[i].classList.add('active');
        })
    };
}
new Swiper('.swiper-container', {
    breakpoints: {
        1370: {
            slidesPerView: 3,
            spaceBetween: 25,
        },

        1024: {
            slidesPerView: 2.2,
            spaceBetween: 25,
        },

        653: {
            slidesPerView: 1.1,
            spaceBetween: 15,
        },

        320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        }
    }
});