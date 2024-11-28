function showDetails(eventName) {
    alert(`Vous avez sélectionné l'événement : ${eventName}`);
}
const carousel = document.querySelector('#carouselExampleIndicators');


carousel.addEventListener('mouseenter', function () {
    const bootstrapCarousel = new bootstrap.Carousel(carousel);
    bootstrapCarousel.pause();
});


carousel.addEventListener('mouseleave', function () {
    const bootstrapCarousel = new bootstrap.Carousel(carousel);
    bootstrapCarousel.cycle();
});


carousel.addEventListener('mousemove', function () {
    const bootstrapCarousel = new bootstrap.Carousel(carousel);
    bootstrapCarousel.next();
});
