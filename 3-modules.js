// const amount = 12;

// if (amount < 10){
//     console.log('small number');
// } else{
//     console.log('large number');
// }

//console.log(`hey it's my first node app!!!`)
// __dirname  -  path to current directory
// __filename -  file name
// require    -  function to use modules (CommonJS)
// module     -  info about current module (file)
// process    -  info about env where the program is being executed
//console.log(__dirname)


//Modules
//CommonJS, every file is module (by default)
 
const names = require('./4-name')
const sayHi = require('./5-ultils')
const data = require('./6-alternative-flavor')
const addValues = require('./7-mind-grenade')
// console.log(names)
// console.log(sayHi)
// console.log(data)
console.log(addValues)

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
