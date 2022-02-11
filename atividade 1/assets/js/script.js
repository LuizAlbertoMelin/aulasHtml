/*
  1- js é caseSensitive = reconhece letra maisculas e minusculas

  2- 3 jeitos de declarar variavel
    var nome = 'thiago' //escopo global
    let nome = 'thiago' //escopo fechado
    const nome = 'thiago' // fechado e não deve ser alterado

  3-Document Selector
    Por tag: getElemetByTagName(input)
    por id: getElementById('ID')
    por nome: getElementByName()
    por classe: getElementsByClassName()
    por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
  if(nome.value.lenght < 3){
    alert('nome invalido')
  }
}