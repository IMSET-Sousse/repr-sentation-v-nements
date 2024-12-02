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
            var button = event.relatedTarget; 
            var eventName = button.getAttribute('data-event-name');
            var eventImage = button.getAttribute('data-image');
            var eventDescription = button.getAttribute('data-description');
            var eventPlace = button.getAttribute('data-place');
            var eventTime = button.getAttribute('data-time');
            var eventDate = button.getAttribute('data-date');

            
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
        const reservationModal = document.getElementById('reservationModal');
        reservationModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const name = button.getAttribute('data-name');
            const date = button.getAttribute('data-date');
            const eventType = button.getAttribute('data-event');
        
          
            document.getElementById('event').value = eventType;
            document.getElementById('eventDate').value = date;
        });

let liked = false;
let disliked = false;

document.getElementById("like-btn").addEventListener("click", function() {
    liked = true;
    disliked = false;
    document.getElementById("like-btn").classList.add("btn-outline-success");
    document.getElementById("dislike-btn").classList.remove("btn-outline-danger");
});

document.getElementById("dislike-btn").addEventListener("click", function() {
    disliked = true;
    liked = false;
    document.getElementById("dislike-btn").classList.add("btn-outline-danger");
    document.getElementById("like-btn").classList.remove("btn-outline-success");
});


document.getElementById("submit-comment").addEventListener("click", function() {
    let commentText = document.getElementById("comment-input").value;
    if (commentText.trim() !== "") {
      
        alert("Comment Submitted: " + commentText);
        document.getElementById("comment-input").value = ""; 
        let modal = bootstrap.Modal.getInstance(document.getElementById("postModal"));
        modal.hide();
    } else {
        alert("Please enter a comment.");
    }
});