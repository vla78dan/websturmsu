const video = document.querySelector('.video-background');

const swiperText = new Swiper('.swiper', {
    speed: 1700,
    mousewheel: {},
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'

    }

})
swiperText.on('slideChange', function (event) {
    gsap.to(video, 1.6, {
        currentTime: (video.duration / (this.slides.length - 1)) * this.realIndex,
        ease: Power2.easeOut
    })
})
swiperText.on('slideChangeTransitionStart', function (event) {
    video.classList.add('change')
}).on('slideChangeTransitionEnd', function (event) {
    video.classList.remove('change')
})