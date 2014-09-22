
$(document).ready(function (e) {});

App.controller('MainCtrl', function ($scope, $routeParams) {
  $scope.awesomeThings = [];




  //Active Menu

  $('header ul li a').click(function (e) {
    $('header ul li a').removeClass('activeMenu');
    $(this).addClass("activeMenu");
  });

  $('header div:nth-of-type(1) a').click(function (e) {
    $('header ul li a').removeClass('activeMenu');
  });

  // Accordion

  $('div.accordion h2').click(function (e) {
    $(this).next('article').toggleClass('openAccordion');
    $(this).next('article:nth-of-type(1)').removeClass('closeAccordion');
    $(this).toggleClass('activeAccordion');
    $(this).next('article').removeClass('openFormbelong');
    $(this).removeClass('closeAccordion');
  });

   $('div.calendarEvents h2').click(function (e) {
    $(this).next('article').toggleClass('openAccordion');
    $(this).next('article:nth-of-type(1)').removeClass('closeAccordion');
    $(this).toggleClass('activeAccordion');
    $(this).next('article').removeClass('openFormbelong');
    $(this).removeClass('closeAccordion');
  });

//
    $('div.profileTabs div.tabsItems a:nth-of-type(1) ').click(function (e) {
    $(this).parent('div.tabsItems').next('div.tabsContainer').children('div.tabContent:nth-of-type(1)').hide();

  });
//
//TABS
//var posicion;
//  $(".div.profileTabs div.tabsItems a ").click(function(e) {
////   $(this).parent('div.tabsItems').next('div.tabsContainer').children('div.tabContent').removeClass("hideTab");
//   $(this).parent('div.tabsItems').next('div.tabsContainer').children('div.tabContent').addClass("showTab");
////    posicion = $(this).index();
////    $('.div.tabContent').css({'display':'none'});
////    $('.div.tabContent').eq(0).fadeIn(200);
//  });



   $('.directories article').mouseenter(function (e) {
     $(this).children('a.over').animate({bottom: "0px"}, 300, 'easeInExpo');
  });

  $('.directories article').mouseleave(function (e) {
     $(this).children('a.over').animate({bottom: "-180px"}, 100, 'easeInExpo');
  });



//  $('div.accordion article:nth-of-type(1)').addClass('closeAccordion');
//  $('div.accordion h2:nth-of-type(1)').addClass('activeAccordion');

  $('div.accordion article:nth-of-type(1) a.btnYellow').toggle(function (e) {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Close").stop();
    setTimeout(function() {$('.scrollClick1').click();}, 400);
  }, function () {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Belong").stop();
  });

   $('.scrollClick1').click(function (e) {
    $.scrollTo('#scrollDown1', 1000, {
      easing: 'easeInOutBack',
      offset:-10
    });
  });

    $('div.accordion article:nth-of-type(2) a.btnYellow').toggle(function (e) {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Close").stop();
    setTimeout(function() {$('.scrollClick2').click();}, 400);
  }, function () {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Belong").stop();
  });


   $('.scrollClick2').click(function (e) {
    $.scrollTo('#scrollDown2', 1000, {
      easing: 'easeInOutBack',
      offset:-10
    });
  });


      $('div.accordion article:nth-of-type(3) a.btnYellow').toggle(function (e) {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Close").stop();
    setTimeout(function() {$('.scrollClick3').click();}, 400);
  }, function () {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Belong").stop();
  });


   $('.scrollClick3').click(function (e) {
    $.scrollTo('#scrollDown3', 1000, {
      easing: 'easeInOutBack',
      offset:-10
    });
  });


        $('div.accordion article:nth-of-type(4) a.btnYellow').toggle(function (e) {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Close").stop();
    setTimeout(function() {$('.scrollClick4').click();}, 400);
  }, function () {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Belong").stop();
  });

   $('.scrollClick4').click(function (e) {
    $.scrollTo('#scrollDown4', 1000, {
      easing: 'easeInOutBack',
      offset:-10
    });
  });

        $('div.accordion article:nth-of-type(5) a.btnYellow').toggle(function (e) {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Close").stop();
    setTimeout(function() {$('.scrollClick5').click();}, 400);
  }, function () {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Belong").stop();
  });

     $('.scrollClick5').click(function (e) {
    $.scrollTo('#scrollDown5', 1000, {
      easing: 'easeInOutBack',
      offset:-10
    });
  });

    $('div.showConfirm').click(function (e) {
     $('article').removeClass('openFormbelong');
     $('div.accordion article a.btnYellow').text("Belong").stop();
  });






  //     $('div.accordion h2').click(function (e) {
  //    if ($(this).is('.activeAccordion')) {
  //        $(this).removeClass('activeAccordion');
  //    }
  //    else{
  //        $(this).addClass('activeAccordion');
  //    }
  //    });



  //$('div.overlay').click(function (e) {
  //// $(this).toggleClass('openOverlay');
  //// $('div.modalBox').toggleClass('openmodalBox');
  //});




  //  $('div.accordion .openAccordion').click(function (e) {
  //      $(this).next('article').animateAuto("height", 100, 'easeInOutBack');
  ////      $(this).toggleClass('openAccordion');
  //      $(this).toggleClass('closeAccordion');
  ////      $(this).attr("class", "closeAccordion");
  //
  //  });

  //    $('.closeAccordion').click(function (e) {
  //      alert('x')
  //  });

  //    var alto = false;
  //    $("div.accordion h2").bind("click", function (e) {
  //      if (alto == false) {
  //        console.log('abierto');
  //        alto = true;
  //  //      $('article').animate({height: "0px"}, 100);
  //        $(this).next('article').animateAuto("height", 100, 'easeInOutBack')
  //      } else {
  //         $(this).next('article').animate({
  //          height: "0px"
  //        }, 100, 'easeInOutBack');
  //        console.log('cerrado');
  //        alto = false;
  //      }
  //    });
  //
  //
  ////   Fix Height auto
  //
  //
  //  jQuery.fn.animateAuto = function(prop, speed, callback){
  //      var elem, height, width;
  //      return this.each(function(i, el){
  //          el = jQuery(el), elem = el.clone().css({"height":"auto"}).appendTo(el.parent());
  //          height = elem.css("height"),
  //          width = elem.css("width"),
  //          elem.remove();
  //
  //          if(prop === "height")
  //              el.animate({"height":height}, speed, callback);
  //          else if(prop === "width")
  //              el.animate({"width":width}, speed, callback);
  //          else if(prop === "both")
  //              el.animate({"width":width,"height":height}, speed, callback);
  //      });
  //  }
  //







