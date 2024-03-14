$(document).ready(() => {
  $('#registration-form').click(() => {
    $('#modal').fadeIn(400);
  });

  $('.exit')
    .eq(0)
    .click(() => {
      $('#modal').fadeOut(800);
    });

  $('#login-form').click(() => {
    $('#login-modal').fadeIn(400);
  });

  $('.exit')
    .eq(1)
    .click(() => {
      $('#login-modal').fadeOut(800);
    });

  $(window).click((event) => {
    if (
      event.target == $('#modal').get(0) ||
      event.target == $('#login-modal').get(0)
    ) {
      $('#modal').fadeOut(800);
      $('#login-modal').fadeOut(800);
    }
  });

  $('#qa-form').on('submit', (event) => {
    event.preventDefault();
    if($('#qa-form').valid()){
        $('#qa-form').animate({ opacity: 'hide', left: '+=700' }, 1400);
        setTimeout(() => {
        $('#promis-img').fadeIn(1200);
        }, 1400);
    }
  });
});
