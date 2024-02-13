var nome = "Carlos"
var idade = 20
var cidade  = "São Paulo"

let mostraPessoa = (nome,idade,cidade) => {
    return `Olá ${nome} ,sua idade é ${idade} e sua cidade ${cidade}`
}

const mensagem = mostraPessoa(nome,idade,cidade)
console.log(mensagem);


// com objeto json 

let pessoa = [{
    nome: "Carlos",
    idade: 20,
    cidade: "São Paulo"
}]

let mostraPessoaComObjeto = (pessoa) => {
   
    for(let cidadao of pessoa){
        return `Olá ${cidadao.nome} ,sua idade é ${cidadao.idade} e sua cidade ${cidadao.cidade}`
    }
}

const mensagem2 = mostraPessoaComObjeto(pessoa)
console.log(mensagem2);