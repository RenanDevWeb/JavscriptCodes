let dataAniversario = "11/2/2024"

let date = new Date()
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

let data= `${day}/${month}/${year}`

if(dataAniversario == data){
    console.log("PARABÈNS MUITA SAUDE E PAZ ");
}
