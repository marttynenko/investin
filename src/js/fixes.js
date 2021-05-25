const FARBA = {
	//lazy load для сторонних либ
	lazyLibraryLoad(scriptSrc,linkHref,callback) {
		let script = document.createElement('script');
		script.src = scriptSrc;
		document.querySelector('body > script').after(script);

		if (linkHref !== '') {
			let style = document.createElement('link');
			style.href = linkHref;
			style.rel = 'stylesheet';
			document.querySelector('link').before(style);
		}

		script.onload = callback
	},
	//закрытие магнифика
	customMagnificClose() {
		$.magnificPopup.close()
	}
}

$(document).ready(function(){

	//лениво тянем магнифик и инитим его
	if ($('.ui-styler').length) {
		FARBA.lazyLibraryLoad(
			'https://cdnjs.cloudflare.com/ajax/libs/jQueryFormStyler/2.0.2/jquery.formstyler.min.js',
			'https://cdnjs.cloudflare.com/ajax/libs/jQueryFormStyler/2.0.2/jquery.formstyler.min.css',
			function() {
				$('.ui-styler').styler();
			}
		)
	}

	//кастомная кнопка для закрытия магнифика
	$(document).on('click','.mfp-custom-close',(e) => {
		e.preventDefault()
		FARBA.customMagnificClose()
	})

	

});