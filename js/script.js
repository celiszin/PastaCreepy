// script.js - Lógica para a página principal (index.html)

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Animação de Rolagem (Scroll) ---
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

    // --- 2. Lógica de Redirecionamento para a História Individual ---
    // A ideia é que, ao clicar em "Leia mais", o usuário seja levado para 
    // historias.html com o ID da lenda na URL (ex: historias.html?id=kuchisake).
    
    const linksLeiaMais = document.querySelectorAll('.card-lenda a');

    linksLeiaMais.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Previne o comportamento padrão do link
            
            // Pega o ID da lenda a partir do atributo data-id do card pai
            const card = link.closest('.card-lenda');
            const lendaId = card.getAttribute('data-id');

            if (lendaId) {
                // Redireciona para a página de histórias com o ID como parâmetro de busca
                window.location.href = `historias.html?id=${lendaId}`;
            } else {
                // Caso o data-id não esteja configurado (fallback)
                window.location.href = 'historias.html';
            }
        });
    });
});
