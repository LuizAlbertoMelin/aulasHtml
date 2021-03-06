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
let nomeOk= false
let emailOk= false
let assuntoOk= false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
  let txtNome = document.querySelector('#txtNome')
  if(nome.value.length < 3){
    txtNome.innerHTML = 'nome invalido'
    txtNome.style.background = '#ff000046'
    txtNome.style.color = '#ffff' 
  } else{
    txtNome.innerHTML = 'nome valido'
    txtNome.style.background = '#00800045'
    txtNome.style.color = '#ffff' 
    nomeOk = true
  }
}

function validaEmail(){
  let txtEmail = document.querySelector ('#txtEmail')
  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == - 1){
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.background = '#ff000046'
    txtEmail.style.color = '#ffff' 
  } else{
    txtEmail.innerHTML = 'Email valido'
    txtEmail.style.background = '#00800045'
    txtEmail.style.color = '#ffff' 
    emailOk = true
  }
}

function validaAssunto(){
  let txtAssunto = document.querySelector('#txtAssunto')

  if (assunto.value.length >= 100){
    txtAssunto.innerHTML = 'texto muito grnade, digite no maximo 100 caracteres'
    txtAssunto.style.background = '#ff000046'
    txtAssunto.style.color = '#ffff'
    txtAssunto.style.display = 'block'
  } else {
    txtAssunto.style.display = 'none'
    assuntoOk = true
  }
}

function enviar(){
  if (nomeOk == true && emailOk == true && assuntoOk == true){
    alert ('formulario enviado')
  } else{
    alert ('preencha o formulario corretamente')
  }
}

function mapaZoom(){
  mapa.style.width = '800px'
  mapa.style.height = '600px'
}

function mapaNormal(){
 mapa.style.width = '400px'
 mapa.style.height = '300px'
}