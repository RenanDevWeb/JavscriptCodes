const string = "teste de array"
const splitedString = Array.from(string)
const arrayCode = []
let binarieCodes = []

for(let i = 0 ;i <= splitedString.length -1; i++){
  arrayCode.push(string.charCodeAt(i))
}

arrayCode.forEach(element => {
  binarieCodes = decimalToBinarie(element)
})


function decimalToBinarie(decimalNumber){
    var restStack = []
    var rest, binarieString = ''
  
    while (decimalNumber > 0) {
       rest = Math.floor(decimalNumber % 2)
       restStack.push(rest)
       decimalNumber = Math.floor(decimalNumber / 2)
       
    }
   

     while (restStack.length > 0) {
 
          binarieString += restStack.pop().toString() 
     }
  
  
     return binarieString
  
  }


function printBinarie(print){
  console.log(print)
}

printBinarie(binarieCodes)
