const data  = new Date()
const dataDeNascimento = '05/06/1992'
const ano = dataDeNascimento.split('/')[2]
let anoatual = data.getFullYear()
const idade  = anoatual -  ano 

let podeVotar =  idade > 16 ? "Pode Votar" : "Ainda não pode votar" 

console.log(podeVotar);