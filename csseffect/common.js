$(function(){

  var h = $('html, body');
  var winTop = h.scrollTop() + (($(window).height() - 500) / 2);
  var winHeight = h.height();

  // window
	if (navigator.userAgent.indexOf('iPhone') > 0){
    $('.module_window').css({width : '100%', height : '100%', left : '0', top : '0', overflow: 'auto'});
	}else if(navigator.userAgent.indexOf('Android') > 0){
    $('.module_window').css({width : '100%', height : '100%', left : '0', top : '0'});
	}else{
    $(".module_window").css({top:winTop + "px", "left":($(window).width()  - 700) / 2});
    $("#layer").css({height:winHeight + "px"});
    $(window).resize(function() {
      $(".module_window").css({"left":($(window).width() - 700) / 2 });
    })
	}

  function windowToggle() {
    $(this).closest(".module").toggleClass("show_window");
    $('body').toggleClass("fixed");
    $('#layer').toggle();
  }

  function windowRemove() {
    $(".module").removeClass("show_window");
    $('body').removeClass("fixed");
    $('#layer').css({display : 'none'});
  }


  $(".window_toggle_button").bind('click', windowToggle);
  $("#layer").bind('click', windowRemove);

  $(window).keyup(function(e){
	  if(e.keyCode == 27){
	    windowRemove();
	  }
  });


  // textarea focus
  $("textarea").focus(function() {
    var $this = $(this);
    $this.select();

    $this.mouseup(function() {
      $this.unbind("mouseup");
      return false;
    });
  });


});