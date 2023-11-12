/** Scroll to top */
window.scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/** Change the order of items */
export function changeFooterLogoOrder() {
    const introductionTitle = document.querySelector("#sv-footer .sv-footer-logo");

    if (window.matchMedia("(max-width: 991px)").matches) introductionTitle.classList.add("order-4");
    else introductionTitle.classList.remove("order-4")
}