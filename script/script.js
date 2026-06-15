$(document).ready(function() {
    // Função para verificar se o card entrou na tela
    function checkScroll() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        
        $('.timeline-item').each(function() {
            // Pega a posição do card
            var elementOffset = $(this).offset().top;
            
            // Se o topo da tela + altura da janela ultrapassar o card, ele aparece
            if (elementOffset < (scrollTop + windowHeight - 100)) {
                $(this).addClass('visible');
            }
        });
    }
    
    // Roda a função quando a página carrega (para mostrar os primeiros cards)
    checkScroll();
    
    // Roda a função sempre que o usuário descer a página
    $(window).on('scroll', checkScroll);
});