import galleryItems from "./gallery-items.js";
console.log(galleryItems);

const galleryList = document.querySelector(".js-gallery");

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
