const eDivisivel = (divisor,dividendo) => {
   return divisor % dividendo == 0 ? "Divisivel" : "Não divisivel"  

}
const resultado = eDivisivel(6,2)
console.log(resultado);