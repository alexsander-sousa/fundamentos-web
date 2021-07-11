/*Case sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por classe: getElementsByClassName()
por Seletor: querySelector()*/

let nome =window.document.getElementById('nome') //dentro da funcao funciona aspas simples ou aspas duplas
let email = document.querySelector('#email')//quando usar querySelector nao esquecer de colocar # dentro da funcao
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txt1 = document.querySelector('#txtNome')
    if(nome.value.length < 3){
       txt1.innerHTML = 'Nome inválido!'
       txt1.style.color = 'red'
    }
    else{
        txt1.innerHTML = 'Nome válido!'
        txt1.style.color = "green"
    }
}

function validaEmail(){
    let txt2 = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txt2.innerHTML = 'E-mail inválido'
        txt2.style.color = 'red'
    }
    else{
        txt2.innerHTML = 'E-mail válido'
        txt2.style.color = 'green'
    }
}