/* Entendendo o objeto Intl*/ 

let numero =1558.90;

let formatted = Intl.NumberFormat('pt-BR',{
style: 'currency',
currency: 'BRL',
currencyDisplay: 'narrowSymbol'
}).format(numero)
console.log(formatted);