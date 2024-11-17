import { cardComponent } from "./components/cardComponent";
import { cardImage } from "./components/cardImage"
import "./style.css";


const imageOne = cardComponent();
imageOne.appendChild(cardImage());

app.appendChild(imageOne);