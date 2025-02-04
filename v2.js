console.log(__dirname)
console.log(__filename)

console.log(process.platform)
process.argv[0] = 4
process.argv[1] = 5
console.log(process.argv[0] + process.argv[1])