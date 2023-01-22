new Swiper('.image-swiper', {
	centeredSlides:false,
  	loop:false,
	navigation: {
        nextEl:`.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
    },
	//Пагинация
	pagination: {
		el: '.swiper-pagination',
    	
		// type: 'fraction',
		// renderFraction: function(currentClass, totalClass) {
		// 	return 'Фото <span class ="'+ currentClass +'"></span>' + ' из ' + '<span class ="'+ totalClass +'"></span>';
		// },
	},
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true,
	//   },
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	// autoHeight: true,
	// *определяет, сколько будет отображаться слайдов
	// slidesPerView: "auto",
	// *Центрирование первого слайда
	// centeredSlides: true,
	// *прокручивание без фиксирвоанных значений
	// freeMode: true,

	// *автоматическое проигрывание слайдера
	// autoplay: {
	// 	// Пауза между прокручиваниями
	// 	delay: 1000,
	// 	//Закончить на последнем слайде
	// 	stopOnLastSlide: true,
	// 	//Отключить после ручного переключения
	// 	disableOnInteraction: false,
	// },

	// вертикальный слайдер
	// direction: 'vertical',
});