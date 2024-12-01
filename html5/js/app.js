const swiperText = new Swiper('.swiper', {
    speed: 1700,
    mousewheel: {},
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',

    }
})