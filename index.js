// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function appendDriver(name){
    let newArr = [...drivers,name]
    // let newArr2 = [...drivers,name] 
    return newArr
}

function prependDriver(name){
    let newArr = [name,...drivers]
    return newArr
}

function removeLastDriver(){
    return drivers.slice(0,drivers.length-1)
}

function removeFirstDriver(){
    return drivers.slice(1)
}

