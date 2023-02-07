const minusButtonNode = document.querySelector(".counter_minus-button");
const numberOutputNode = document.querySelector(".number_output");
const plusButtonNode = document.querySelector(".counter_plus-button");

let counter = 0;
minusButtonNode.addEventListener('click', function () {
	counter = counter - 1;
	numberOutputNode.innerHTML = counter;
});

plusButtonNode.addEventListener('click', function () {
	counter = counter + 1;
	numberOutputNode.innerHTML = counter;
});