const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const path = require('path')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8', (err,data)=>{
//             if (err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }



const start = async () => {
    try {
        const first = await readFile('./first.txt', 'utf8')
        const second = await readFile('./second.txt', 'utf8')
        await writeFile(
            './result-mind-grenade.txt',
            `THIS IS AWESOME :  ${first} ${second}`,
            {flag: 'a'}
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()

// getText('./first.txt')
//     .then(result => console.log(result))
//     .catch((err)=>console.log(err))