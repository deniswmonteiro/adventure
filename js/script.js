import { changeHeaderBackground, animateSection } from "./header.js";
import { changeIntroductionOrder, insertTitle } from "./introduction.js";
import "./challenges.js";
import { changeFooterLogoOrder } from "./footer.js";

window.onload = () => {
    /** Header */
    changeHeaderBackground();
    animateSection();

    window.addEventListener("scroll", changeHeaderBackground);
    window.addEventListener("scroll", animateSection);

    /** Introduction */
    changeIntroductionOrder();
    insertTitle();

    window.addEventListener("resize", changeIntroductionOrder);
    window.addEventListener("resize", insertTitle);

    /** Footer */
    changeFooterLogoOrder();
    window.addEventListener("resize", changeFooterLogoOrder);
}