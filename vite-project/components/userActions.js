import "./userActions.css";
import { actionButton } from "./actionButton ";
import edit from "../assets/edit.svg";
import trash from "../assets/trash.svg";
import { formComp } from "./formComp";
import { deleteUser } from "../utils/deleteUser";
import { init } from "../main";

export const usersActions = () => {
  const actionsContainer = document.createElement("div");
  actionsContainer.classList.add("actions-container");

  const buttonOne = actionButton(edit, "warning-btn", buttonOneFn);
  const buttonTwo = actionButton(trash, "danger-btn", buttonTwoFn);

  actionsContainer.appendChild(buttonOne);
  actionsContainer.appendChild(buttonTwo);

  return actionsContainer;
};

function buttonOneFn(e) {
  document.querySelector(".modal-overlay").classList.toggle("show");
  const userId = e.target.parentElement.parentElement.getAttribute("userId");
  console.log(userId);
}

function buttonTwoFn(e) {
  document.querySelector(".modal-overlay").classList.toggle("show");
  const userId = e.target.parentElement.parentElement.getAttribute("userId");
  console.log(userId);
}
