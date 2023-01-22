// В этом файле есть обращение к элементам, с которыми нам предстоит работать
// Здесь больше реализована функциональность самого интерфейса 

const valueInputNode = document.querySelector('.js-value-input');
const currencySelectorNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output');

function getInput(){
	//* значения могут возвращаться в виду любой структуры данных
	return { 
		rub: Number(valueInputNode.value),
		currency: currencySelectorNode.value
	}
};

function render(result){
	outputNode.innerText = result;
}

valueInputNode.addEventListener('input', function() {
	const result = convert(getInput());
	render(result);
});

currencySelectorNode.addEventListener('change', function(){
	const result = convert(getInput());
	render(result);
});


//* Первая версия кода. Где одинаковый код еще не выведен в отдельные функции
// valueInputNode.addEventListener('input', function() {
// 	const rub = Number(valueInputNode.value);
// 	const currency = currencySelectorNode.value;
// 	const result = convert(rub,currency);
// 	outputNode.innerText = result;
// });

// currencySelectorNode.addEventListener('change', function(){
// 	const rub = Number(valueInputNode.value);
// 	const currency = currencySelectorNode.value;
// 	const result = convert(rub,currency);
// 	outputNode.innerText = result;
// });