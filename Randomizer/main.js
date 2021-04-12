const tags = document.getElementById('tags')
const txtArea = document.getElementById('textarea')

txtArea.focus()
txtArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
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