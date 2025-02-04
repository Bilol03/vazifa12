let fs = require('fs')
let path = require('path')
let os = require('os')

fs.writeFileSync('./v3.txt', "Hellooo Txt")

let hello = fs.readFileSync(path.join(__dirname, './v3.txt'), 'utf-8')
console.log(hello);


console.log(os.arch())
