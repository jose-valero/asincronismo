const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        //cambiamos el if por una operacion ternaria
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 1000)
            : reject(new Error('Test Error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

console.log('Before_1')
doSomething()
console.log('After_1')

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('Before_2')
anotherFunction()
console.log('After_2')