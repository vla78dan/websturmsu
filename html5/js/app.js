const swiperText = new Swiper('.swiper', {
    speed: 1700,
    mousewheel: {},
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})