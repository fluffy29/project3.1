import { cardComponent } from "./components/cardComponent";
import "./style.css";

app.append(cardComponent());

export const cardComponent = () => {
  const card = document.createElement("article");
  card.innerText = "hello from component card !";
  return card;
};
