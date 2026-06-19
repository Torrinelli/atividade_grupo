$(document).ready(function() {
    // Função para verificar se o card entrou na tela
    function checkScroll() {
        let windowHeight = $(window).height();
        let scrollTop = $(window).scrollTop();
        
        $('.timeline-item').each(function() {
            // Pega a posição do card
            let elementOffset = $(this).offset().top;
            
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

    // Target by ID
$("#meuBotao").on("click", function() {
    let video = $('.body-bg-video')[0];
    let botao = $(this);

    if(video.muted || video.paused){

        video.muted = false; //tira o mudo
        video.play(); //forçar o video a tocar (evita bloqueio do navegador)
        
        botao.text('Pause Music') // para mudar o texto do botão
    }
    else{

        video.muted = true // colocar no mudo novamente
        botao.text('Play Music'); //volta o texto original
        
    }
    
});

// Target by Class
$(".button").on("click", function() {
    console.log("Submitted");
});