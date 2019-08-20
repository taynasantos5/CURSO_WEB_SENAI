$(document).ready(function(){
    $.get( "http://localhost:3888/", function(data) {

        for(let i=0; i<data.length; i++)      
        {
            document.getElementById("lista").innerHTML += `Titulo: 
            ${data[i].titulo} `/*
            document.getElementById("lista").innerHTML += `Fim de execução: 
            ${data[i].fim_execucao} `
            document.getElementById("lista").innerHTML += `Justificativa: 
            ${data[i].justificativa} */<br>`      
        }    
    });  
});