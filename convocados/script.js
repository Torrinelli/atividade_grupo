$(document).ready(function () {
    
    $('.card').css({
        'transition': 'all 0.3s ease',
        'cursor': 'pointer'
    });

    $('.card').hover(
        function() {
            $(this).addClass('shadow-lg').css({
                'transform': 'scale(1.04)',
                'border-color': '#ffcc00' // Amarelo da Seleção
            });
        },
        function() {
            $(this).removeClass('shadow-lg').css({
                'transform': 'scale(1)',
                'border-color': '#198754' 
            });
        }
    );
});