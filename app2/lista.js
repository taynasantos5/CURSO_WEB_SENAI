const url = 'https://dados.ifpb.edu.br/dataset/e99b5cfd-f2f3-4b54-bb4f-6ddd9e480af7/resource/f81de6aa-afde-4cdb-bee0-a9ed2f87c4c3/download/projetos-pesquisa.json'
const axios = require('axios')


//FILTRO DE IMPRESSÃO
const titulo = f => f.titulo === 'Cajaíba'
//const fim_execucao = f => f.fim_execucao === '02/02/2016'
//const justificativa = f => f.justificativa === 'Nada Consta'

axios.get(url).then(resposta => {
    const servidores = resposta.data
    module.exports.resultado = servidores.filter(titulo).filter(fim_execucao).filter(justificativa)
        console.log(servidores.filter(titulo)/*.filter(fim_execucao).filter(justificativa)*/)
})
