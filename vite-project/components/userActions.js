import "./userActions.css";
import { actionButton } from "./actionButton ";
import edit from "../assets/edit.svg";
import trash from "../assets/trash.svg";
import { usersActions } from "./userActions";

export const usersActions = () => {
  const actionsContainer = document.createElement("div");
  actionsContainer.classList.add("actions-container");

  const buttonOne = actionButton(edit, "warning-btn");
  const buttonTwo = actionButton(trash, "danger-btn");

  actionsContainer.appendChild(buttonOne);
  actionsContainer.appendChild(buttonTwo);

  return actionsContainer;
};

function buttonOneFn() {
  console.log("you clicked the first button !!!");
}

function buttonTwoFn() {
  console.log("you clicked the second button !!!");
}
