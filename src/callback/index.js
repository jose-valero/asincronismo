function suma(numb1, numb2) {
    return numb1 + numb2
}

function calc(numb1, numb2, callback) {
    return callback(numb1, numb2)

}
console.log(calc(5, 2, suma))

function date(callback) {
    console.log(new Date)
    setTimeout(() => {
        let date = new Date
        callback(date)
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow)
}

date(printDate)








