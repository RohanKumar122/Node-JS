const fs =require('fs')

const fileContent=fs.readFileSync('./text.txt')
console.log(fileContent)
console.log(fileContent.toString())