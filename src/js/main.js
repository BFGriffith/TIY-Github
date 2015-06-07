(function(window){

  $('li').click(function(){
    $(this).siblings().removeClass('tab-current');
    $(this).addClass('tab-current');
    $('section').removeClass('content-current');
    $($('a', this).attr('href')).addClass('content-current');
  });

})(window);
