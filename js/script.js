import { changeHeaderBackground } from "./header.js";
import { changeIntroductionOrder, insertTitle } from "./introduction.js";
import { changeFooterLogoOrder } from "./footer.js";

window.onload = () => {
    /** Header */
    changeHeaderBackground();
    window.addEventListener("scroll", changeHeaderBackground);

    /** Introduction */
    changeIntroductionOrder();
    insertTitle();

    window.addEventListener("resize", changeIntroductionOrder);
    window.addEventListener("resize", insertTitle);

    /** Footer */
    changeFooterLogoOrder();
    window.addEventListener("resize", changeFooterLogoOrder);
}