const produto = [
    {nome: `Notebook`, preco: 300 , fragil: true},
    {nome: `Ipad Pro`, preco: 500 , fragil: true},
    {nome: `Copo de Vidro`, preco: 5 , fragil: true},
    {nome: `Copo de Metal`, preco: 12 , fragil: false}
]
console.log(
    produto.filter(function(p){
    return false
    })
)

const fragil = produto => produto.fragil
const caro = produto => produto.preco <= 5

console.log (produto.filter(caro))