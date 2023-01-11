function myEach(collection, myEachCallback){
    let objValues = Object.values(collection)
    for (let i = 0; i < objValues.length; i++) {
        myEachCallback(objValues[i])
    }
    return collection
}

function myMap(collection, callback) {
    let objValues = Object.values(collection)
    let newCollection = objValues.map(value => callback(value))
    return newCollection
}

function myReduce(collection, callback, acc = -2) {
    let objValues = Object.values(collection)
    let sum = acc
    for (let value of objValues) {
        sum = callback(sum, value, collection)
    }
    return sum
}

function myFind(collection, callback) {
    let objValues = Object.values(collection)
    return objValues.find(target => callback(target))
}

function myFilter(collection, callback) {
    let objValues = Object.values(collection)
    return objValues.filter(element => callback(element))
}