$(document).ready(function () {

    $(".chosen").chosen()
    $(".slider").bxSlider({
        speed: 1000,
        pager: false,
        controls: true,
        nextSelector: '',
        prevSelector: '',
        infiniteLoop: false,
        hideControlOnEnd: false,
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>'
        }
)

$(function(){
    $('.tab-section').hide();
    $('#tabs a').bind('click', function(e){
        $('#tabs a.current').removeClass('current');
        $('.tab-section:visible').hide();
        $(this.hash).show();
        $(this).addClass('current');
        e.preventDefault();
    }).filter(':first').click();
});


    var Slider = $(".sliderBig ul").bxSlider({
        speed: 1000,
        pager: false,
        nextText: '',
        prevText: '',
        captions: true,
        infiniteLoop: false,
        hideControlOnEnd: false,
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            changeThumb(ThumbSlider, newIndex);

        }

    });

    var ThumbSlider = $(".sliderThumb ul").bxSlider({
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 156,
        slideMargin: 5,
        moveSlides: 1,
        pager: false,
        speed: 1000,
        mode: 'vertical',
        infiniteLoop: false,
        hideControlOnEnd: false,
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '<i class="fa fa-chevron-down"></i>',
        prevText: '<i class="fa fa-chevron-up"></i>',
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {

        }
    });

    linkSliders(Slider, ThumbSlider);

    if ($(".sliderThumb li").length < 5) {
        $(".sliderThumb .bx-next").hide();
    }



    function linkSliders(bigS, thumbS) {

        $(".sliderThumb ul").on("click", "a", function (event) {
            event.preventDefault();
            var newIndex = $(this).parent().attr("slideIndex");
            bigS.goToSlide(newIndex);
        });



    }

    function changeThumb(slider, newIndex) {

        var $thumbS = $(".sliderThumb");
        $thumbS.find('.active').removeClass("active");
        $thumbS.find('li[slideIndex="' + newIndex + '"]').addClass("active");

        if (slider.getSlideCount() - newIndex >= 4) slider.goToSlide(newIndex);
        else slider.goToSlide(slider.getSlideCount() - 4);

    }

    $('#inmuebles').click(function (event) {
        $.scrollTo('#inmuebles-anchor', 600, {
            easing: 'easeOutCirc',
            offset: -40
        });
    });

    $('#proyectos').click(function (event) {
        $.scrollTo('#proyectos-anchor', 600, {
            easing: 'easeOutCirc',
            offset: -90
        });
    });

    $('#contacto').click(function (event) {
        $.scrollTo('#contacto-anchor', 600, {
            easing: 'easeOutCirc',
            offset: -90
        });
    });

    var nav = $('.main-menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 380) {
            nav.addClass("fixed-menu");
        } else {
            nav.removeClass("fixed-menu");
        }
    });

});
