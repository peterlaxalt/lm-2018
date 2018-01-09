// mobile nav
$('.lmnt-menu-toggle').click(function() {
  if ($('.lmnt-nav-overlay').hasClass('lmnt-nav-overlay-visible')) {
      $('.lmnt-nav-overlay').removeClass('lmnt-nav-overlay-visible');
      $('.lmnt-body').removeClass('scroll-lock');
  }
  else {
    $('.lmnt-nav-overlay').addClass('lmnt-nav-overlay-visible');
    $('.lmnt-body').addClass('scroll-lock');
  }
})
