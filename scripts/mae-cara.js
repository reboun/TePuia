const carousel = document.querySelector(".maephotogal");
const slide = document.querySelector(".maephotogal");

function handleCarouselMove(positive = true) {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft = positive ? carousel.scrollLeft + slideWidth : carousel.scrollLeft - slideWidth;
}