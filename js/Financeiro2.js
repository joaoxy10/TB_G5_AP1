document.addEventListener('DOMContentLoaded', function() {
h2=document.querySelector('h2')
meses=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
Recebido=localStorage.getItem('input').toLowerCase()
if (meses.includes(Recebido)){
   h2.innerHTML=`mês: ${Recebido}` 
}

})