const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkForBoxes)

function checkForBoxes() {
    const trigger = window.innerHeight/5 * 4;

    boxes.forEach(box => {
        const firstBox = box.getBoundingClientRect().top

        if (firstBox < trigger) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}