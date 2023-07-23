// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name) {
    // Create a new array with all the elements from the original cats array
    const newCatsArray = cats.slice();
    // Append the new cat name to the new array
    newCatsArray.push(name);  
    // Return the new array with the appended cat name
    return newCatsArray;
}

function prependCat(name){
    const newCatsArray = cats.slice()
    newCatsArray.unshift(name)
    return newCatsArray
}

function removeLastCat(){
    const newCatsArray = cats.slice(0,length-1)
    return newCatsArray
}

function removeFirstCat(){
    const newCatsArray = cats.slice(1)
    return newCatsArray
}
