const inputANode = document.querySelector('.js-inputA');
const inputBNode = document.querySelector('.js-inputB');
const operationSelectorNode = document.querySelector('.js-operation-selector');
const btnNode = document.querySelector('.js-btn-calc');
const resultOutputNode = document.querySelector('.js-result-output');

btnNode.addEventListener('click', function(){
	const a = Number(inputANode.value);
	const b = Number(inputBNode.value);
	const operation = operationSelectorNode.value;

	let result = calculate({a,b,operation});
	console.log(operation)
	resultOutputNode.innerHTML = result;
});

operationSelectorNode.addEventListener('change', function () {
	btnNode.focus()	
});
//! Нужно решить проблему с фокусом элементов: кнопка
//! Добавить возможность использования клавишь при работе с select

//* Можно попробовать использовать код ниже для множественной типизации listener 
// ['click','ontouchstart'].forEach( function(evt) {
//     element.addEventListener(evt, dosomething, false);
// });