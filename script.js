const slideImg = document.querySelector(".slide__img");
const horizontalSlider = document.getElementById("width-slider");
const verticalSlider = document.getElementById("height-slider");

pickRandomSlide();

slideImg.addEventListener("click", pickRandomSlide)

var width = 0;
var height = 0;

slideImg.onload = () => {
    width = slideImg.clientWidth;
    height = slideImg.clientHeight;
}

horizontalSlider.addEventListener("input", handleSlideHorizontal);
verticalSlider.addEventListener("input", handleSlideVertical);

function pickRandomSlide() {
    const slides = ["1.png", "2.jpg", "3.png", "4.jpg", "5.png", "6.png"];
    const index = Math.floor(Math.random() * 6);
    const slide = slides[index];

    slideImg.src = `img/slides/${slide}`;

    slideImg.style.height = "40%";
    slideImg.style.width = "auto";
    width = slideImg.clientWidth;
    height = slideImg.clientHeight;

    horizontalSlider.value = 0;
    verticalSlider.value = 0;
}

function handleSlideHorizontal(e) {
    const { value, max } = e.target;

    slideImg.style.width = `${Number(width) + 10 * Number(value)}px`;
}

function handleSlideVertical(e) {
    const { value, max } = e.target;
    slideImg.style.height = `${Number(height) + 10 * Number(value)}px`;
}

