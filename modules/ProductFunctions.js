module.exports = {
    sortProducts(products){
        return products.sort( (pA, pB) => {
            let { category : categoryA, id : idA} = pA
            let { category : categoryB, id : idB} = pB
            if(categoryA > categoryB) return 1
            if(categoryA < categoryB) return -1
            return idA - idB
        })
    },
    valuePerCategory(products){
        let categories = {}
        for(let product of products){
            let { category, price, quantity } = product 
            if(categories[category] === undefined) categories[category] = 0
            categories[category] += price * quantity
        }
        for(let category in categories)
            categories[category] = parseFloat(categories[category].toFixed(2)) 
        return categories
    }

}