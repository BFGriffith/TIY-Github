(function(window){


  $.getJSON("https://api.github.com/users/octocat").then(function(data){
  console.log('yo', data);
  });
  $('script', { src: '/api/github/users/octocat.json'}).appendTo('body');


  $('li').click(function(){
    $(this).siblings().removeClass('tab-current');
    $(this).addClass('tab-current');
    $('section').removeClass('content-current');
    $($('a', this).attr('href')).addClass('content-current');
  });

})(window);
