const tags = document.getElementById('tags')
const txtArea = document.getElementById('textarea')

txtArea.focus()
txtArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }

})

function createTags(input) {
    const newTags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tags.innerHTML = ''


    newTags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tags.appendChild(tagEl)
    });

}

function randomSelect () {
    const times = 30

    const interval = setInterval(() => {

        const randomTag = pickRandomTag()
        highlightTag(randomTag)

        setTimeout(() => {
            removeHighlightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const random = pickRandomTag()
            highlightTag(random)
        }, 100)

    }, times * 100)

}


function pickRandomTag () {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function removeHighlightTag(tag) {
    tag.classList.remove('highlight')
}