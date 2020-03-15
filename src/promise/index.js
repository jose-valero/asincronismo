const somethingWillHappend = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('HEYY!!')
        } else {
            reject('OUCHH!!')
        }
    })
}

somethingWillHappend()
    .then(response => console.log(response))
    .catch(error => console.error(error))


const somethingWillHappend2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('TRUEEE!!!!')
            }, 2000)
        } else {
            const error = new Error('Whopss!!')
            reject(error)
        }
    })
}

somethingWillHappend2()
    .then(response => console.log(response))
    .catch(error => console.error(error))

Promise.all([somethingWillHappend(), somethingWillHappend2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(error => {
        console.error(error)
    })