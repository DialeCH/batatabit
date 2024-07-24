let flechaDer = document.querySelector('.arrow-right');
let comission = document.querySelector('.main-commissions-table');
let flechaIzq = document.querySelector('.arrow-left')
let currency = document.querySelector('.main-currency-table')

flechaDer.addEventListener('click', mostrar);
flechaIzq.addEventListener('click', mostrar);

function mostrar() {
	comission.classList.toggle('inactive');
    currency.classList.toggle('inactive')
}


