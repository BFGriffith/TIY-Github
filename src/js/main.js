(function(window) {

  $.getJSON('/api/github/users/al-the-x.json')
  /**
   * Replacing placeholders with data from...?
   *
   * @param user
   * @return ???
   */
  .then(function(user){
    var nameTpl = _.template($('.profile-name').html());

    console.log(nameTpl({ 'user': user }));

    $('.profile-name').html(nameTpl({ 'user': user }));
  });
})(window);


$('li').click(function() {
$(this).siblings().removeClass('tab-current');
$(this).addClass('tab-current');
$('section').removeClass('content-current');
$($('a', this).attr('href')).addClass('content-current');
});

})(window);
