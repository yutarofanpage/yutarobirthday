let likeButtons = document.getElementsByClassName("like");
let nextButtons = document.getElementsByClassName("boton");
let backButtons = document.getElementsByClassName("boton-back");

for (let index = 0; index < likeButtons.length; index++) {
    const element = likeButtons[index];
    element.addEventListener("click", () => {
        element.classList.add("play")
        console.log("tocado")
    })
}

for (let index = 0; index < nextButtons.length; index++) {
    const element = nextButtons[index];
    element.addEventListener("click", () => {
        const parent = element.parentElement.parentElement
        parent.classList.add("animate__animated", "animate__slideOutLeft")
    })
}

for (let index = 0; index < backButtons.length; index++) {
    const button = backButtons[index];

    button.addEventListener("click", () => {
        const containers = document.getElementsByClassName("container")
        const parent = button.parentElement.parentElement

        for (let index = 0; index < containers.length; index++) {
            const container = containers[index];

            if (container.innerHTML == parent.innerHTML) {
                containers[index - 1].classList.remove("animate__animated", "animate__slideOutLeft")
                containers[index - 1].classList.add("animate__animated", "animate__slideInLeft")
                break;
            }
        }
    })
}