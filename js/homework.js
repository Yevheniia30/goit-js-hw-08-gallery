import galleryItems from "./gallery-items.js";
// console.log(galleryItems);

//создаем разметку и рендер  галереи по массиву и шаблону
const galleryList = document.querySelector(".js-gallery");
const modalImage = document.querySelector(".lightbox__image");
console.log(modalImage);

galleryList.append(
  galleryItems
    .map((image) => {
      const galleryItem = document.createElement("li");
      const linkItem = document.createElement("a");
      const imageItem = document.createElement("img");

      linkItem.setAttribute("href", image.original);

      imageItem.setAttribute("src", image.preview);
      imageItem.setAttribute("alt", image.description);
      imageItem.setAttribute("data-source", image.original);

      galleryItem.append(linkItem);
      linkItem.append(imageItem);
      galleryList.append(galleryItem);

      galleryItem.classList.add("gallery__item");
      linkItem.classList.add("gallery__link");
      imageItem.classList.add("gallery__image");
    })
    .join("")
);
console.log(galleryList);

// реализуем делегирование на галерее
const onGalleryClick = (event) => {
  event.preventDefault();
  // console.log(event.target);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // if (event.target === event.currentTarget) {
  //   return;
  // }
  const imageRef = event.target;
  // console.log(imageRef.dataset);
  const largeImageUrl = imageRef.dataset.source;
  // console.log(largeImageUrl);
  setModalImageSrc(largeImageUrl);
};
// вешаем слушатель на галерею
galleryList.addEventListener("click", onGalleryClick);
// присваиваем src модальной картинке (атрибут source картинки, на которую происходит клик)
const setModalImageSrc = (url) => {
  modalImage.src = url;
  console.log(modalImage);
};
