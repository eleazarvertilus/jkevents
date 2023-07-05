const gallery = document.querySelector(".gallery");
const images = gallery.querySelectorAll("img");
const prevBtn = gallery.querySelector(".prev");
const nextBtn = gallery.querySelector(".next");

let currentIndex = 0;
let intervalId;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

function showNextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function showPrevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

function startSlideshow() {
  intervalId = setInterval(showNextImage, 4000);
}

function stopSlideshow() {
  clearInterval(intervalId);
}

showImage(currentIndex);
prevBtn.addEventListener("click", () => {
  stopSlideshow();
  showPrevImage();
});
nextBtn.addEventListener("click", () => {
  stopSlideshow();
  showNextImage();
});
startSlideshow();

document.addEventListener("DOMContentLoaded", function() {
  var dateField = document.getElementById("date");
  var today = new Date().toISOString().split("T")[0];
  dateField.value = today;
});
