let slideIndex = 1;

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const thumbnails = document.getElementsByClassName("thumbnail");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    thumbnails[slideIndex - 1].classList.add("active");
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

showSlide(slideIndex);
