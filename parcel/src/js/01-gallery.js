import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
<img class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}">

/>
    </a>
</li> 
`
  )
  .join("");

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  const isGalleryImage = event.target.classList.contains("gallery__image");

  if (!isGalleryImage) return;

  const largeImageULR = event.target.dataset.source;

  const instance = basicLightbox.create(` <img src="${largeImageULR}"
        width="800" height"600">`);
  instance.show();
});
