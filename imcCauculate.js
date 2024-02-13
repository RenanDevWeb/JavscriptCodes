const  clasification = {
    magreza: 18.5,
    normal: [18.6,24.9],
    sobrepeso: [25,29.9],
    obesidade: [30,39.9],
    obesidadeGrave: [40],
}

const cauculateIMC = (weight,height) => {
   let result = weight / (height * height)
   validateIMC(result)

}

const validateIMC = result => {
    if(result < clasification.magreza ) { console.log("Magreza");}
    if(result >= clasification.normal[0] && result <= clasification.normal[1]  ) { console.log("Normal");}
    if(result >= clasification.sobrepeso[0] && result <= clasification.sobrepeso[1]  ) {console.log("Sobrepeso");}
    if(result >= clasification.obesidade[0] && result <= clasification.obesidade[1]  ) {console.log("Obesidade");}
    if(result >= clasification.obesidadeGrave[0]   ) {console.log("Obesidade Grave");}
}

cauculateIMC(126,1.90)