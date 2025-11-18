document.addEventListener('DOMContentLoaded',function(){
h2=document.querySelector('h2')
main=document.querySelector('main')
p=main.querySelector("p")
Recebido=localStorage.getItem('input').toLowerCase()
estoque=['bucha','tapioca','batata','abacaxi','suco de uva','file de peito','peito de frango']
if(estoque.includes(Recebido)){
    h2.innerHTML=`item: ${Recebido}`
    p.innerHTML=`Unidades de  ${Recebido}: 6 unidades`
}
})