/** Change the order of items */
export function changeIntroductionOrder() {
    const introductionTitle = document.querySelector("#sv-introduction .sv-col-introduction-title");

    if (window.matchMedia("(max-width: 991px)").matches) introductionTitle.classList.add("order-2");
    else introductionTitle.classList.remove("order-2")
}

/** Change title position */
export function insertTitle() {
    const divIntroductionTitle = document.querySelector(".sv-introduction-title-1");
    const introductionTitle = document.querySelector(".sv-introduction-title-2");
    const introductionTitleModified = document.querySelectorAll(".sv-introduction-title-2-modified");
    const p = document.createElement("p");

    if (window.matchMedia("(max-width: 991px)").matches) {
        p.innerText = introductionTitle.innerText;
        p.classList.add("sv-introduction-title-2-modified");

        if (introductionTitleModified.length === 0) divIntroductionTitle.insertAdjacentElement("afterbegin", p);
        
        introductionTitle.style.display = "none";
    }

    else {
        if (introductionTitleModified.length > 0) divIntroductionTitle.removeChild(introductionTitleModified[0]);

        introductionTitle.style.display = "block";
    }
}