$(document).ready(function () {
    
    // Configura a transição suave inicial para os cards via CSS
    $('.card').css({
        'transition': 'all 0.3s ease',
        'cursor': 'pointer'
    });

    // Efeito de Interatividade (Hover) nos cards dos jogadores
    $('.card').hover(
        function() {
            // Quando o mouse entra: adiciona sombra pesada e dá um leve zoom (borda amarela)
            $(this).addClass('shadow-lg').css({
                'transform': 'scale(1.04)',
                'border-color': '#ffcc00' // Amarelo da Seleção
            });
        },
        function() {
            // Quando o mouse sai: volta ao estado original (borda verde do Bootstrap)
            $(this).removeClass('shadow-lg').css({
                'transform': 'scale(1)',
                'border-color': '#198754' // Verde Success do Bootstrap
            });
        }
    );
});