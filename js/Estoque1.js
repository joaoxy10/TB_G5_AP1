document.addEventListener('DOMContentLoaded',function(){
input=document.querySelector('input')
lupa=document.querySelector('.Lupa')
lupa.addEventListener('click',function(event){
    console.log(input.value)
    valor=input.value
    localStorage.setItem('input',valor)

})






})