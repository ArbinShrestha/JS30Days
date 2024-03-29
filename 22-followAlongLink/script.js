const triggers = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightLink(){
    const linkCoordinates = this.getBoundingClientRect()
    console.log(linkCoordinates)
    const coords ={
        width: linkCoordinates.width,
        height: linkCoordinates.height,
        top: linkCoordinates.top + window.scrollY,
        left: linkCoordinates.left + window.scrollX
    }
    highlight.style.width = `${linkCoordinates.width}px`
    highlight.style.height = `${linkCoordinates.height}px`
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`


}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))
