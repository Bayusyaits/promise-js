const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];
const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr && arr.length > 0) {
            const a = arr.map((v) => {
                if (v && typeof v == 'string') {
                    return v.toUpperCase()
                } else {
                    return v
                }
            })
            resolve(a)
        } else {
            reject('error undefined')
        }
    })
}
const sortWords = (res) => {
    return new Promise((resolve, reject) => {
        if (res && res.length > 0) {
            resolve(res.sort())
        } else {
            reject('data undefined')
        }
    })
}
makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then(result => { console.log(result) })
    .catch(error => { console.log(error) })

makeAllCaps(complicatedArray)
    .then(sortWords)
    .then(result => { console.log(result) })
    .catch(error => { console.log(error) })