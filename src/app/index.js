import { printHome } from "./views/view-home/print-home";
import { setHomePage } from "./listeners/hashchange-listener";
import "./styles/styles.scss";

window.onload = () => {
    printHome();
    setHomePage();
};
