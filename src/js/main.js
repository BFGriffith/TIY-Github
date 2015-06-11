/*Thanks to @pcreglow for reminding me about the data-bind option...
At least that helped me to get some "underpants" for the octocat.
Not sure if this method is optimal or "correct" though, and I'm
still working on toggling between octocat and my username with
the <select> ... but I got tired and ran out of time.
*/
(function(window) {

    var select = document.querySelectorAll('option:checked');
    if (select = 'octocat') {
        $.getJSON('../api/github/users/octocat.json')
            .then(function() {
                $avatar = $('img#avatar');
                $avatar.attr('src', octocat.avatar_url);
                $('[data-bind="user.name"]').text(octocat.name);
                $('[data-bind="user.login"]').text(octocat.login);
                $('[data-bind="user.following"]').text(octocat.following);
                $('[data-bind="user.followers"]').text(octocat.followers);
                $('[data-bind="user.company"]').text(octocat.company);
                $('[data-bind="user.location"]').text(octocat.location);
                $('[data-bind="user.email"]').text(octocat.email);
                $('[data-bind="user.blog"]').text(octocat.blog);
            });
    } else if (select = Epicurean306) {
        $.getJSON('../api/github/users/Epicurean306.json')
            .then(function() {
                $avatar = $('img#avatar');
                $avatar.attr('src', Epicurean306.avatar_url);
                $('[data-bind="user.name"]').text(Epicurean306.name);
                $('[data-bind="user.login"]').text(Epicurean306.login);
                $('[data-bind="user.following"]').text(Epicurean306.following);
                $('[data-bind="user.followers"]').text(Epicurean306.followers);
                $('[data-bind="user.company"]').text(Epicurean306.company);
                $('[data-bind="user.location"]').text(Epicurean306.location);
                $('[data-bind="user.email"]').text(Epicurean306.email);
                $('[data-bind="user.blog"]').text(Epicurean306.blog);
            });
    };


    /*
      $.getJSON("https://api.github.com/users/octocat").then(function(data){
      console.log('yo', data);
      });
      $('script', { src: '/api/github/users/octocat.json'}).appendTo('body');
    */

    $('li').click(function() {
        $(this).siblings().removeClass('tab-current');
        $(this).addClass('tab-current');
        $('section').removeClass('content-current');
        $($('a', this).attr('href')).addClass('content-current');
    });

})(window);
