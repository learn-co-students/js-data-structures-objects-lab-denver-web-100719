// Write your solution in this file!
let driver = {
    name: "",
    address: "",
}

function updateDriverWithKeyAndValue(driver, key, value){
    const copiedObject = Object.assign({}, driver)
    copiedObject[key] = value
    return copiedObject
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    const copiedObject = Object.assign({}, driver)
    delete copiedObject[key]
    return copiedObject
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}