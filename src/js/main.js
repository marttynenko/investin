$(document).ready(function(){

    $('.h_search_toggler').click(function () {
        $(this).toggleClass('open');
        $('.h_col_right').removeClass('open');
        $('.h_user_dropdown').removeClass('act');
        return false;
    });

    $('.h_menu_toggler').click(function () {
        $(this).toggleClass('act');
        $(this).next().toggleClass('open');
        return false;
    });


    $('.dropdown_toggler').click(function () {
        $(this).toggleClass('act');
        $(this).next().toggleClass('open');
        return false;
    });

    $('.h_user_dropdown').click(function () {
        $(this).toggleClass('act');
        $('.h_col_right').toggleClass('open');
        $('.h_search_toggler').removeClass('open');
        return false;
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".h_menu_nav.open").length) {
            $(".h_menu_nav.open").removeClass('open');
            $('.h_menu_toggler').removeClass('act');
        }else if (!$(e.target).closest(".dropdown_menu.open").length) {
            $(".dropdown_menu.open").removeClass('open');
            $('.dropdown_toggler').removeClass('act');
        }
        e.stopPropagation();
    });



    if($('.cards_slider > div').length > 3){
        $('.cards_slider').slick({
            slidesToShow:3,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            infinite: false,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 767 && $('.cards_slider > div').length > 1){
        $('.cards_slider').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false
        });
    }else if($(window).innerWidth() < 991 && $('.cards_slider > div').length > 2){
        $('.cards_slider').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false
        });
    }






    function formatRating (rating) {
        if (!rating.id) {
            return rating.text;
        }
        var baseUrl = "img/icons/rating/";
        var $rating = $(
            '<span class="review_select_rating"><span class="text">' + rating.text + '</span><img src="' + baseUrl + '/' + rating.element.value.toLowerCase() + '.svg" class="img-rating" /></span>'
        );
        return $rating;
    };

    $(".reviews_sort_select").select2({
        templateResult: formatRating,
        minimumResultsForSearch: -1
    });


    $('select.custom_select').select2({
        minimumResultsForSearch: -1
    });


    $('.materials_group_header').click(function(){
       $(this).parent().toggleClass('act');
        return false;
    });



    $('.h_form .btn_reset').click(function(){
        $(this).hide();
    });
    $('.search_input').keydown(function(){
        if ( $(this).val().length>1 ) {
        $(this).next().show();
        }else{
            $(this).next().hide();
        }
    });



    function limitChars(myObject, max, typeChars, leftChars){
        $(myObject).keydown(function(){
            var count = $(this).val().length;
            var num = max - count;
            $(typeChars).text(count);
        });
    }

    var myObject = '.limitInput';
    var max = 1000;
    var typeChars = '#typeChars';
    limitChars(myObject, max, typeChars);
    limitChars('#limitInput', 1000, typeChars);


    $(function () {
        $('input, textarea').each(function () {
            $(this).blur(function(){
                if(!this.value){
                    $(this).removeClass('error');
                }
                else{
                    $(this).addClass('error');
                }
            });
            if ( !this.value ) {
                $(this).removeClass('error');
            }
            else{
                $(this).addClass('error');
            }
        });
    });


    $('.popup-with-form').magnificPopup({
        // Delay in milliseconds before popup is removed
        removalDelay: 300,
        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        //mainClass: 'mfp-fade'
    });

    // Личный кабинет автора - Модальное окно: Создание теста 
    $('.popup-with-test').magnificPopup({
        // Delay in milliseconds before popup is removed
        removalDelay: 300,
        mainClass: 'create-test-overlay'
        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        //mainClass: 'mfp-fade'
    });
});





