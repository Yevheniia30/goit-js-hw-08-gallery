import galleryItems from "./gallery-items.js";
// console.log(galleryItems);

//создаем разметку и рендер  галереи по массиву и шаблону
const galleryList = document.querySelector(".js-gallery");
const modalImage = document.querySelector(".lightbox__image");
const modalWindow = document.querySelector(".lightbox");
const closeModalBtn = document.querySelector(".lightbox__button");
const overlayRef = document.querySelector(".lightbox__overlay");

galleryList.append(
  galleryItems
    .map((image, index) => {
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
      imageItem.dataset.index = index;
    })
    .join("")
);
console.log(galleryList);

// реализуем делегирование на галерее
const openModalHandler = (event) => {
  event.preventDefault();

  // устанавливаем невозможность клика на любые элементы кроме картинок
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // if (event.target === event.currentTarget) {
  //   return;
  // }

  // узнаем url модальной картинки
  const imageRef = event.target;
  const largeImageUrl = imageRef.dataset.source;
  const largeImageAlt = imageRef.alt;
  const largeImageIndex = imageRef.dataset.index;

  setModalImageSrc(largeImageUrl, largeImageAlt, largeImageIndex);

  // открытие модалки
  modalWindow.classList.add("is-open");

  // слушатель на виндоу для реализации закрітия модалки кнопкой esc
  window.addEventListener("keydown", closeByEscModalHandler);
};

// вешаем слушатель на галерею
galleryList.addEventListener("click", openModalHandler);
// присваиваем src и alt модальной картинке (атрибуты source и alt картинки, на которую происходит клик)
const setModalImageSrc = (url, alt, index) => {
  modalImage.src = url;
  modalImage.alt = alt;
  modalImage.dataset.index = index;

  // console.log(modalImage);
};

// закрытие модалки
const closeModalHandler = (event) => {
  // снимаем слушателя с виндоу
  window.removeEventListener("keydown", closeByEscModalHandler);
  modalWindow.classList.remove("is-open");
  // очистка атрибутов модальной картинки при закрытии модалки
  modalImage.src = "";
  modalImage.alt = "";
};

//  закрытие нажатием esc
const closeByEscModalHandler = (event) => {
  if (event.code === "Escape") {
    closeModalHandler();
    console.log(close);
  }
};

// закрытие  кнопкой close
closeModalBtn.addEventListener("click", closeModalHandler);

// закрытие  кликом по оверлею
overlayRef.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closeModalHandler();
  }
});

// пролистывание

// if (event.target==='')

// right

// left
// закрытие нажатием esc
// window.addEventListener("keydown", (event) => {
//   if (event.code === "Escape") {
//     closeModalHandler();
//     console.log(close);
//   }
// });
