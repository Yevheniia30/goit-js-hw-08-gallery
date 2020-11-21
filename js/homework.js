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
  // console.log(imageRef);
  const largeImageUrl = imageRef.dataset.source;
  const largeImageAlt = imageRef.alt;
  // console.log(largeImageUrl);
  setModalImageSrc(largeImageUrl, largeImageAlt);
};
// вешаем слушатель на галерею
galleryList.addEventListener("click", onGalleryClick);
// присваиваем src и alt модальной картинке (атрибуты source и alt картинки, на которую происходит клик)
const setModalImageSrc = (url, alt) => {
  modalImage.src = url;
  modalImage.alt = alt;
  console.log(modalImage);
};

// открытие модалки
// const galleryImage = document.querySelectorAll(".gallery__image");
const modalWindow = document.querySelector(".lightbox");

galleryList.addEventListener("click", () => {
  modalWindow.classList.add("is-open");
});

//  закрытие модалки кнопкой close
const closeModalBtn = document.querySelector(".lightbox__button");

closeModalBtn.addEventListener("click", () => {
  modalWindow.classList.remove("is-open");
  modalImage.src = "";
  modalImage.alt = "";
});
