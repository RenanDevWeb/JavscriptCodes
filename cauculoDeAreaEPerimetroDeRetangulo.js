let cauculoDeArea = (base,altura) => {
    // A = b * H
    // A = base * altura 
   let resultado = base * altura 
   return resultado
}

let cauculoDeperimetro = (base,altura) => {
     // P= 2(b+h) 
     // P  =  base + altura

    let resultado = 2 * (base + altura)
    return resultado
 }

 const perimetro = cauculoDeperimetro(11,7)
 const area = cauculoDeArea(12,5)

 console.log(`O perimetro e de ${perimetro} e a area de ${area}`);