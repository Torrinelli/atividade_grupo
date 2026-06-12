$(document).ready(function() {
  $(window).on('scroll', function() {
    var alturaJanela = $(window).height();
    var scrollPos = $(window).scrollTop();

    $('.timeline-item').each(function() {
      var offsetItem = $(this).offset().top;

      // Verifica se o item está visível na tela
      if (offsetItem < scrollPos + alturaJanela - 100) {
        $(this).find('.timeline-conteudo').animate({'opacity': '1'}, 800);
      }
    });
  });
});
