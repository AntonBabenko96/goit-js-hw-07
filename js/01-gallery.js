import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener("click", onGalleryClick)
function createGalleryMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
        
})
.join(" ")
}
function onGalleryClick(e) {
    e.preventDefault()

    if (!e.target.classList.contains("gallery__image")) {
        return
    }
   
    const linkLargeImg = e.target.dataset.source;
   const instance = basicLightbox.create(`
    <img src="${linkLargeImg}" width="800" height="600">
`)

instance.show()

}

