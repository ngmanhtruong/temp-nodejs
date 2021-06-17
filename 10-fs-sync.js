//SYNC

const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./first.txt','utf8')
const second = readFileSync('./second.txt', 'utf8')

writeFileSync(
    './result-sync.txt',
    `Here's the result: ${first}, ${second}`,
    {flag : 'a'}
)
console.log('DONE WITH THIS TASK')
console.log('Starting the next one')

