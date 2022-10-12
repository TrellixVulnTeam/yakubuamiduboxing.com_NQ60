const galleryItem = document.getElementsByClassName("gallery__item");
// Create element for lightbox
const lightboxContainer = document.createElement("div");
// For basic area
const lightBoxContent = document.createElement("div");
// For images
const lightboxImg = document.createElement("img");
// For prev button to change
const lightboxPrev = document.createElement("div");
// For next button
const lightboxNext = document.createElement("div");

// Create classList
lightboxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightboxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightboxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightboxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightboxImg);
lightBoxContent.appendChild(lightboxPrev);
lightBoxContent.appendChild(lightboxNext);
document.body.appendChild(lightboxContainer);

let index = 1;

// Create function
function showLightbox(n) {
  if (n > galleryItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.length;
  }

  let imageLocation =
    galleryItem[index - 1].children[0].getAttribute("src");
  lightboxImg.setAttribute("src", imageLocation);
}

function currentImage() {
  lightboxContainer.style.display = "block";

  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLightbox(index = imageIndex);
}

for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener("click", currentImage);
}

function sliderImage(n) {
  showLightbox(index += n);
}

function prevImage() {
  sliderImage(-1);
}

function nextImage() {
  sliderImage(1);
}

lightboxPrev.addEventListener("click", prevImage);
lightboxNext.addEventListener("click", nextImage);

// Close lightbox
function closeLightbox() {
  if (this === event.target) {
    lightboxContainer.style.display = "none";
  }
}

lightboxContainer.addEventListener("click", closeLightbox);