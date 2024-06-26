function typewriter(ids) {
    const elements = ids.map(id => document.getElementById(id));

    function animateElement(index) {
        if (index >= elements.length) return;

        const element = elements[index];
        element.firstChild.classList.remove("hidden");
        element.firstChild.classList.add("typewriter");

        const time = element.firstChild.textContent.length / 15;
        element.firstChild.style.animation = `typing ${time}s steps(50, end), blink-caret 1s step-end infinite`;

        element.addEventListener("animationend", () => {
            if (index < elements.length - 1) {
                element.firstChild.style.borderRight = "none";
            }
            element.firstChild.style.whiteSpace = "normal";
            animateElement(index + 1);
        }, { once: true });
    }

    animateElement(0);
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof typewriterIDs !== "undefined") {
        typewriter(typewriterIDs);
    }
});