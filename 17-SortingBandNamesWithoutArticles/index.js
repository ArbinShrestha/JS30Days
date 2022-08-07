const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const compare = function (a, b) {
    let aTitle = a.toLowerCase();
    let bTitle = b.toLowerCase()
    
    aTitle = removeArticles(aTitle)
    bTitle = removeArticles(bTitle)

    if (aTitle > bTitle) return 1
    if (bTitle > aTitle) return -1
    return 0
}


function removeArticles(str){
    words = str.split('')
    if(words.lenth <= 1) return str
    if(words[0] == 'a' || words[0] == 'the' || words[0] == 'an')
        return words.splice(1).join('')
    return str
}

var sortedBands = bands.sort(compare)

console.log(sortedBands)
