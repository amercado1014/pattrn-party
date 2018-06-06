$('.tab').on('click', event => {
  const tab = $(event.target).attr('id');

    $('.active').removeClass('active').addClass('not-active');
    $(`#${tab}`).toggleClass('active').removeClass('not-active');
    $('.accordion').find('.current').removeClass('current').addClass('hidden');
    $(`.accordion .${tab}`).removeClass('hidden').addClass('current');
    $('h3.active').removeClass('active').addClass('not-active');
    $(`h3#${tab}`).toggleClass('active').removeClass('not-active');
});

$('.menu').on('click', toggleResponsive);

function toggleResponsive() {
  $('.topnav').toggleClass('responsive');
}

	
	