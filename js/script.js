document.addEventListener('DOMContentLoaded', () => {
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    const cardsParaAnimar = document.querySelectorAll('.card-lenda');
    cardsParaAnimar.forEach(card => {
        observer.observe(card);
    });


    const linksLeiaMais = document.querySelectorAll('.card-lenda a');

    linksLeiaMais.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const card = link.closest('.card-lenda');
            const lendaId = card.getAttribute('data-id');

            if (lendaId) {
                window.location.href = `historias.html?id=${lendaId}`;
            } else {
                window.location.href = 'historias.html';
            }
        });
    });
});
