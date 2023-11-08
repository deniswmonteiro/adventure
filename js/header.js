window.handleSearchSubmit = (event, form) => {
    event.preventDefault();

    const input = document.querySelector(`#${form.id} input`);

    if (input.value.trim() !== "") form.submit();
}

window.handleHideMenuItems = () => {
    const items = document.querySelectorAll(".sv-nav-hidden-item");

    items.forEach((item) => {
        if (item.classList.contains("sv-item-hidden")) item.classList.remove("sv-item-hidden");
        else item.classList.add("sv-item-hidden");
    });
}