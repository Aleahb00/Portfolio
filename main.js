const projectButtons = document.querySelectorAll(".laptop-project");

let index = 0;
let timer = null;
let activeModal = null;
let slides = [];

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

function startCarousel() {
    timer = setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 2500);
}

function stopCarousel() {
    clearInterval(timer);
    timer = null;
    index = 0;
}

projectButtons.forEach(button => {
button.addEventListener("click", () => {
    const project = button.dataset.project;

    activeModal = document.getElementById(`carousel-${project}`);
    slides = activeModal.querySelectorAll(".carousel-slide");

    activeModal.classList.add("active");
    showSlide(0);
    startCarousel();

    const closeBtn = activeModal.querySelector(".close-carousel");
    closeBtn.onclick = () => {
    activeModal.classList.remove("active");
    stopCarousel();
    };
});
});