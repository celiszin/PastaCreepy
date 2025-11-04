document.addEventListener('DOMContentLoaded', function() {
    
    const filtroInput = document.getElementById('filtroBusca');
    const cards = document.querySelectorAll('.card-lenda');

    filtroInput.addEventListener('keyup', function() {
        
        const filtroTexto = filtroInput.value.toLowerCase();

        cards.forEach(function(card) {
            
            const titulo = card.querySelector('h4').textContent.toLowerCase();

            if (titulo.includes(filtroTexto)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    filtroInput.style.width = '98%';
    filtroInput.style.padding = '15px';
    filtroInput.style.fontSize = '1.1em';
    filtroInput.style.border = '1px solid #ddd';
    filtroInput.style.borderRadius = '8px';
});