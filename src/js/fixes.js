const FARBA = {
	//lazy load для сторонних либ
	lazyLibraryLoad(scriptSrc,linkHref,callback) {
		let script = document.createElement('script');
		script.src = scriptSrc;
		let scripts =document.querySelectorAll('script')
		scripts[scripts.length - 1].after(script);

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
	},

	tabs(selector) {
		// var selector = this;

		this.each(function() {
			var obj = $(this); 
			$(obj.attr('href')).hide();
			$(obj).click(function() {
				$(selector).removeClass('selected');
				
				$(selector).each(function(i, element) {
					$($(element).attr('href')).hide();
				});
				
				$(this).addClass('selected');
				$($(this).attr('href')).fadeIn();
				return false;
			});
		});

		$(this).show();
		$(this).first().click();
		if(location.hash!='' && $('a[href="' + location.hash + '"]').length) {
			$('a[href="' + location.hash + '"]').click();	
		}
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


	$(document).on('change','.ui-file-input',function(e) {
		const target = $(e.target)
		const label = target.next('label')
		if (e.target.files && e.target.files[0]) {
			label.html(`<span class="ui-file-hint">Файл:</span> ${e.target.files[0].name}; <span class="ui-file-hint">Размер:</span> ${(e.target.files[0].size / 1024 / 1024).toFixed(2)}Mb`)
		} else {
			label.html(label.attr('data-label'))
		}
	})

	$('select.ui-tags').select2();
	$('select.ui-tags + .select2-container').addClass('ui-select2-tags')

});