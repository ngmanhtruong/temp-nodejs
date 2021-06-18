const { readFile, writeFile } = require('fs')
const util = require('util')
const path = require('path')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8', (err,data)=>{
            if (err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// getText('./first.txt')
//     .then(result => console.log(result))
//     .catch((err)=>console.log(err))


const start = async () => {
    try {
        const first = await readFilePromise('./first.txt', 'utf8')
        const second = await readFilePromise('./second.txt', 'utf8')
        await writeFilePromise(
            './result-mind-grenade.txt',
            `THIS IS AWESOME :  ${first} ${second} \n`,
            {flag: 'a'}
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()

