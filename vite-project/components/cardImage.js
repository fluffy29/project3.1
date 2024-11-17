export const cardImage = () => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card-image");

  const img = new Image();
  img.src =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  img.setAttribute("alt", "avatar image");

  cardDiv.appendChild(img);

  return cardDiv;
};
