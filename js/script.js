document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Animação de Entrada (Scroll) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const cardsParaAnimar = document.querySelectorAll('.card-lenda');
    cardsParaAnimar.forEach(card => {
        // ATENÇÃO: A linha "card.style.opacity = '0'" FOI REMOVIDA DAQUI.
        // Deixe o CSS (style.css) cuidar da opacidade inicial para não piscar.
        observer.observe(card);
    });

    // --- 2. Bloqueio de Links Vazios ---
    const linksLeiaMais = document.querySelectorAll('.leia-mais-btn');
    linksLeiaMais.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (href === '#' || href === '') {
                event.preventDefault();
                alert("História em breve...");
            }
        });
    });

    // --- 3. Filtro das Bandeiras ---
    const iconesBandeira = document.querySelectorAll('.icone-bandeira');
    const todosCards = document.querySelectorAll('.card-lenda');

    iconesBandeira.forEach(icone => {
        icone.addEventListener('click', () => {
            
            // Troca visual do botão ativo
            iconesBandeira.forEach(b => b.classList.remove('ativo'));
            icone.classList.add('ativo');

            const filtroSelecionado = icone.getAttribute('data-filter');

            todosCards.forEach(card => {
                const paisCard = card.getAttribute('data-pais');
                // Mostra se for 'todos' OU se o país coincidir
                const deveAparecer = (filtroSelecionado === 'todos') || (paisCard === filtroSelecionado);

                if (deveAparecer) {
                    card.classList.remove('escondido');
                    // Pequeno delay para a animação funcionar
                    setTimeout(() => {
                        card.classList.add('visivel');
                        card.style.display = 'flex';
                    }, 50);
                } else {
                    card.classList.remove('visivel');
                    card.classList.add('escondido');
                }
            });
        });
    });
});