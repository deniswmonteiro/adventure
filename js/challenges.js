/** Animate results total */
window.animateResultsTotal = () => {
    const resultsTotal = document.querySelector(".sv-results-total");
    const total = Number(resultsTotal.innerText);
    let start = 0;

    const timer = setInterval(() => {
        start++;
        resultsTotal.innerText = start;

        if (start === total) clearInterval(timer);
    }, 50);
}

/** Mutation observer */
const observerTarget = document.querySelector("#sv-results");
const observer = new MutationObserver(handleMutation);

observer.observe(observerTarget, { attributes: true });

function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("section-active")) {
        window.animateResultsTotal();
        observer.disconnect();
    }
}