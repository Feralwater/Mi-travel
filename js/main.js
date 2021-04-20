const swiper1 = document.querySelector('.slider-container'),
    swiper2 = document.querySelector('.swiper-container'),
    burger = document.querySelector('.burger'),
    btn = document.querySelector('.blog-article__category'),
    close = document.querySelector('.menu__close'),
    cl = document.querySelector('.menu__close-1'),
    menu = document.querySelector('.menu'),
    stor = document.querySelector('.featured__stories');

let swiperSlider1 = new Swiper(swiper1, {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 105,
});

let swiperSlider2 = new Swiper(swiper2, {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    fadeEffect: {
        crossFade: true
    },
    effect: 'fade',
    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left',
    },
});

const playButtonsFirst = document.querySelectorAll('.main-slider__play ');

swiperSlider2.on('transitionEnd', function () {
    let videos = document.querySelectorAll('.first__slider video');
    videos.forEach((el) => {
        el.pause();
        el.currentTime = 0;
    });
    playButtonsFirst.forEach((el) => {
        el.style.display = 'block';
    });
});

burger.addEventListener('click', () => {
    menu.classList.add('menu--visible');
});


btn.addEventListener('click', () => {
    stor.classList.add('menu--vis');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
});

cl.addEventListener('click', () => {
    stor.classList.remove('menu--vis');
});

playButtonsFirst.forEach((el) => {
    el.addEventListener('click', (e) => {
        let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
        video.play();
        e.currentTarget.style.display = 'none';
        setTimeout(() => {
            video.volume = 0.5;
        }, 1000);
});
});