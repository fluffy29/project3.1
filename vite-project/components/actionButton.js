import "./actionButton.css";

/**
 * @param {string} icon // a URL that provides an image for the button
 * @param {string} className // button extra class to add
 * @param {function} onClick // runs a function that is passed
 * @returns {HTMLButtonElement}
 */
export const actionButton = (icon, className, onClick) => {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("btn");
  buttonElement.classList.add(className);

  const deleteImg = new Image();
  deleteImg.src = icon;

  buttonElement.appendChild(deleteImg);

  buttonElement.addEventListener("click", () => {
    onClick();
  });

  return buttonElement;
};
