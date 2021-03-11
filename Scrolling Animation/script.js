const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkForBoxes)

function checkForBoxes() {
    console.log(window.innerHeight/5 * 4)
}