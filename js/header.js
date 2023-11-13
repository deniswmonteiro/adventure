/** Handle search form submit */
window.handleSearchSubmit = (form) => {
    const input = document.querySelector(`#${form.id} input`);

    if (input.value.trim() !== "") form.submit();
}

/** Hide items from menu */
window.handleHideMenuItems = () => {
    const items = document.querySelectorAll(".sv-nav-hidden-item");

    items.forEach((item) => {
        if (item.classList.contains("sv-item-hidden")) item.classList.remove("sv-item-hidden");
        else item.classList.add("sv-item-hidden");
    });
}

/** Change headers background when scroll is above of the title */
export function changeHeaderBackground() {
    const scrollTop = window.scrollY;
    const headerMenu = document.querySelector("#sv-header");
    const headerLogo = document.querySelector(".sv-header-logo");

    if (scrollTop >= 20) {
        headerMenu.classList.add("header-bg");
        headerLogo.classList.add("change-logo");
    }

    else {
        headerMenu.classList.remove("header-bg");
        headerLogo.classList.remove("change-logo");
    }
}

/** Toggle mobile menu  */
window.toggleMenuMobile = (el) => {
    const headerMenu = document.querySelector("#sv-header-menu");
    let active;

    headerMenu.classList.toggle("active");
    el.classList.toggle("active");
    active = headerMenu.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);

    if (active) {
        document.documentElement.style.overflow = "hidden";
        document.body.scroll = "no";  // IE
        document.body.style.touchAction = "none";
    }

    else {
        document.documentElement.style.overflow = "initial";
        document.body.scroll = "yes";  // IE
        document.body.style.touchAction = "auto";
    }
}

/** Animate section */
export function animateSection() {
    const sections = document.querySelectorAll(".sv-section");
    const headerHeight = document.querySelector("#sv-header").clientHeight;

    sections.forEach(section => {
        const sectionHeight = section.clientHeight;
        const sectionOffsetTop = section.offsetTop;
        const scrollTop = window.scrollY;
        const scrollTopAnimateSection = scrollTop + (window.innerHeight * .75);
        const scrollTopResulTotal = scrollTop + (window.innerHeight * .4);

        if ((sectionOffsetTop - headerHeight) < scrollTopAnimateSection && ((sectionOffsetTop - headerHeight + sectionHeight)) > scrollTopAnimateSection) {
            section.classList.add("anime-left");
        }

        if ((sectionOffsetTop - headerHeight) < scrollTopResulTotal && ((sectionOffsetTop - headerHeight + sectionHeight)) > scrollTopResulTotal) {
            section.classList.add("section-active");
        }

        else if (section.classList.contains("section-active")) section.classList.remove("section-active");
    });
}