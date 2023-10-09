let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name="Ralph"){
    return cats.push(name)
}
function destructivelyPrependCat(name="Bob"){
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat () {
    return cats.shift()
}
function appendCat(name = "Broom") {
     const newCatsArray  = [...cats,name]
     return newCatsArray
}
function prependCat(name = "Arnold") {
    const newCatsArray  = [name,...cats]
    return newCatsArray
}
function removeLastCat(){
    // return cats.slice(0,2) 
            // OR
    // return cats.slice(0,-1)
            // OR
    return [...cats.slice(0,2)]
}
function removeFirstCat(){
    // return cats.slice(-2)
            // OR
    return cats.slice(1)
}