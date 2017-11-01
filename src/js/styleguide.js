
// Sidebar navigation and auto scrolling

  // var $body   = $(document.body);

  // $body.scrollspy({
  //   target: '#aw-scrollspy'
  // });

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 20
        }, 500);
        return false;
      }
    }
  });
});

$('.nav li').on('activate.bs.scrollspy', function(e) {
  var targetId = $(e.target).find('a').attr('href');
  scrollActive(targetId);

})