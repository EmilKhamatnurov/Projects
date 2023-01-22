// В данном файле реализована логика работы конвертера
// Описаны данные и основной функционал конвертера

const RATES = {
	usd: 0.014,
	eur: 0.013
};
function convert({rub, currency}) {
	if(!RATES[currency]){
		return none;
	}

	return rub * RATES[currency];
}