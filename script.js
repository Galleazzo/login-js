var a=document.getElementById('enviar')
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function entrar(){
    a.style.borderRadius='50px'
    a.style.transitionProperty='all'
    a.style.transitionDuration='0.5s'
    a.style.cursor='pointer'
    a.style.boxShadow='#27E793 0px 0px 15px'

}

function sair(){
    a.style.borderRadius='7px'
    a.style.boxShadow='#27E793 0px 0px 0px'
}

function enviar(){

    var nome=document.getElementById('nome')
    var sob=document.getElementById('sob')
    var ida=document.getElementById('ida')
    var email=document.getElementById('email')
    var end=document.getElementById('end')

    var nome=String(nome.value)
    var sob=String(sob.value)
    var ida=Number(ida.value)
    var email=String(email.value)
    var end=String(end.value)

    console.log(nome);
    console.log(sob)
    console.log(ida)
    console.log(email)
    console.log(end)


}