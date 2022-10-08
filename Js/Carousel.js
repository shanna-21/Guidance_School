let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
} 

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
// const track = document.querySelector(".carousel_track");
// const slides = Array.from(track.children)
// const nextButton = document.querySelector(".carousel_button--right");
// const prevButton = document.querySelector(".carousel_button--left");
// const dotsNav = document.querySelector(".carousel_nav");
// const dots = Array.from(dotsNav.children)

// const slideWidth = slides[0].getBoundingClientRect().width;

// // Slide Arrangement //
// const setSlidePosition = ((slide,index) => {
//     slide.style.left = slideWidth * index + "px";
// })

// slides.forEach(setSlidePosition);

// // Automatic Slide //
// const automaticSlide = function(){
//     const currentSlide = track.querySelector(".current-slide");
//     const nextSlide = currentSlide.nextElementSibling;
//     const currentDot = dotsNav.querySelector(".current-slide");
//     const targetDot = currentDot.nextElementSibling;

//     if (nextSlide === null) {
//     const firstSlide = slides[0];
//     const targetDot = dots[0];

//     moveToSlide(track, currentSlide, firstSlide)
//     dotsUpdates(currentDot, targetDot);
//     } else {
//     moveToSlide(track, currentSlide, nextSlide);
//     dotsUpdates(currentDot, targetDot);
// }};

// var runSlide = setInterval(automaticSlide, 5000);


// // Right & Left Click //
// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = "translateX(-" + targetSlide.style.left + ")";
//     currentSlide.classList.remove("current-slide");
//     targetSlide.classList.add("current-slide");
// }

// nextButton.addEventListener("click", e => {
//     const currentSlide = track.querySelector(".current-slide");
//     const nextSlide = currentSlide.nextElementSibling;
//     const currentDot = dotsNav.querySelector(".current-slide");
//     const targetDot = currentDot.nextElementSibling;

//     if (nextSlide === null) {
//         const firstSlide = slides[0];
//         const targetDot = dots[0];

//         moveToSlide(track, currentSlide, firstSlide)
//         dotsUpdates(currentDot, targetDot);
//         clearInterval(runSlide);
//         runSlide = setInterval(automaticSlide, 5000);
//     } else {
//         moveToSlide(track, currentSlide, nextSlide);
//         dotsUpdates(currentDot, targetDot);
//         clearInterval(runSlide);
//         runSlide = setInterval(automaticSlide, 5000);
//     }
// })

// prevButton.addEventListener("click", e => {
//     const currentSlide = track.querySelector(".current-slide");
//     const prevSlide = currentSlide.previousElementSibling;
//     const currentDot = dotsNav.querySelector(".current-slide");
//     const targetDot = currentDot.previousElementSibling;

//     if (prevSlide === null) {
//         const finalSlide = slides[slides.length - 1];
//         const targetDot = dots[dots.length - 1];

//         moveToSlide(track, currentSlide, finalSlide)
//         dotsUpdates(currentDot, targetDot);
//         clearInterval(runSlide);
//         runSlide = setInterval(automaticSlide, 5000);
//     } else {
//         moveToSlide(track, currentSlide, prevSlide);
//         dotsUpdates(currentDot, targetDot);
//         clearInterval(runSlide);
//         runSlide = setInterval(automaticSlide, 5000);
//     }

    
// })

// // Dots Click & Updates //

// const dotsUpdates = (currentDot, targetDot) => {
//     currentDot.classList.remove("current-slide");
//     targetDot.classList.add("current-slide");
// }

// dotsNav.addEventListener("click", e => {
//     const targetDot = e.target.closest("button");
    
//     if(!targetDot) return;

//     const currentSlide = track.querySelector(".current-slide");
//     const currentDot = dotsNav.querySelector(".current-slide");
//     const targetIndex = dots.findIndex(dot => dot === targetDot);
//     const targetSlide = slides[targetIndex];

//     moveToSlide(track, currentSlide, targetSlide);
//     dotsUpdates(currentDot, targetDot);
//     clearInterval(runSlide);
//     runSlide = setInterval(automaticSlide, 5000);
// })





// // Fixed Window Reload Size Bug Issue//
// window.onresize = function(){
//     document.location.reload(true)
// }