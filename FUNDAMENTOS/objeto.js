const produto = {}

produto.nome = 'Celular'
produto.preco = 10000
produto.cor = 'pink'

console.log(produto)
console.log(produto.nome, produto.preco, produto.cor)

produto.categoria = {tipo: 'smartphone', loja:'americanas'}
console.log(produto)

const objeto = {
    item1: 'valor item',
    item2: ''
}

console.log(objeto)

const objetoestranho = {
    ['nome^Estranho']: 0
}
console.log(objetoestranho["nome^Estranho"])