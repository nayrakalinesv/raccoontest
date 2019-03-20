const { normalizeString } = require('./StringFunctions')

module.exports = {
    /**
     * Normalize field inside every object of the array
     * @param {Array} data Target array of objects
     * @param {String} field Target field inside to be normalized
     */
    normalizeField(data, field){
        return data.map(
            elem => ({
                ...elem, [field]: normalizeString(elem[field])
            })
        )       
    },
    parseNumberField(data, field){
        return data.map( elem => {
            try {
                let number = parseFloat(elem[field])
                return {
                    ...elem, [field]: number
                }
            } catch(exception) {

            }
        })
    },
    establishField(data, field, defaultValue = null){
        return data.map( elem => {
            if(elem[field] === undefined) return { ...elem, [field]: defaultValue }
            return elem
        })
    }
}