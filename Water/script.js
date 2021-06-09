// Js for Water directory

const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const per = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        highlight(idx)
    })
})

function highlight(idx) {

    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) idx--;

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        per.style.visibility = 'hidden'
        per.style.height = 0
    } else {
        per.style.visibility = 'visible'
        per.style.height = `${fullCups / totalCups * 330}px`
        per.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}