module.exports = {
    normalizeString(string){
        let charMap = {
            a: '[æ]',
            b: '[ß]',
            c: '[¢]',
            o: '[ø]',
        }, 
        newString = string
        for(let char in charMap) 
            newString = newString.replace(new RegExp(charMap[char], 'g'), char)
        return newString
    }
}