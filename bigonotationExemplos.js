//O(1) - tempo de execução sera sempre o mesmo 

const dados = [0,1,2,3,4,5,6,7,8,9]

// dados.pop()


// O(n) tempo linear conforme a entrada de dados

function o_n(entrada, numerodebusca){
  for (let i = 0, max =  entrada.length; i < max; i++) {
  
    if(entrada[i] == numerodebusca){
      return i
    }
  }
}
console.log(o_n(dados, 5));

// o(n)² - tempo quadratico

function o_n_quadratico(entrada){
  const matriz = [];
  for (let i = 0, max = entrada.length;  i < max ; i++) {
    matriz[i] = [];
    for (let j = 0, max = entrada.length; j < max; j++) {
      matriz.push(j) 
    }
  }
  return matriz
}
console.log(o_n_quadratico(dados));

// o(n log n) - quick short algoritm

const entradas  = ['q','a','z','w','s','x','e','d','c','r']
function quicksort(entrada){
  if(entrada.length < 2){
    return entrada
  }
  let pivo = entrada[0]
  let esquerda = []
  let direita = []
  console.log(pivo);
  for (let i = 1, max = entrada.length; i <  max;i++) {
     if(entrada[i] <  pivo){
      esquerda.push(entrada[i])
     }else{
      direita.push(entrada[i])
     }
  }
   console.log(esquerda,direita);
   return [...quicksort(esquerda), pivo, ...quicksort(direita)]
}

console.log(quicksort(entradas));


