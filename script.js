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
var eventModal = document.getElementById('eventModal');
        eventModal.addEventListener('show.bs.modal', function (event) {
            var button = event.relatedTarget; // Button that triggered the modal
            var eventName = button.getAttribute('data-event-name');
            var eventImage = button.getAttribute('data-image');
            var eventDescription = button.getAttribute('data-description');
            var eventPlace = button.getAttribute('data-place');
            var eventTime = button.getAttribute('data-time');
            var eventDate = button.getAttribute('data-date');

            // Update the modal's content
            var modalTitle = eventModal.querySelector('.modal-title');
            var modalImage = eventModal.querySelector('#eventModalImage');
            var modalDescription = eventModal.querySelector('#eventModalDescription');
            var modalPlace = eventModal.querySelector('#eventModalPlace');
            var modalTime = eventModal.querySelector('#eventModalTime');
            var modalDate = eventModal.querySelector('#eventModalDate');

            modalTitle.textContent = eventName;
            modalImage.src = eventImage;
            modalDescription.textContent = eventDescription;
            modalPlace.textContent = eventPlace;
            modalTime.textContent = eventTime;
            modalDate.textContent = eventDate;
        });
