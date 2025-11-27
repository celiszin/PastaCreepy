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
        // Garante que o card comece preparado para animação
        card.style.opacity = '0'; 
        observer.observe(card);
    });

    // --- 2. Bloqueio de Links Vazios ---
    const linksLeiaMais = document.querySelectorAll('.leia-mais-btn');
    linksLeiaMais.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if(href === '#' || href === '') {
                event.preventDefault();
                alert("História em breve...");
            }
        });
    });

    // --- 3. SISTEMA DE FILTRO (Corrigido) ---
    const iconesBandeira = document.querySelectorAll('.icone-bandeira');
    // Seleciona todos os cards
    const todosCards = document.querySelectorAll('.card-lenda');

    iconesBandeira.forEach(icone => {
        icone.addEventListener('click', () => {
            
            // A) Remove a classe 'ativo' de todas as bandeiras
            iconesBandeira.forEach(b => b.classList.remove('ativo'));
            // B) Adiciona 'ativo' apenas na bandeira clicada
            icone.classList.add('ativo');

            // C) Pega o filtro selecionado (ex: 'japao', 'brasil', 'todos')
            const filtroSelecionado = icone.getAttribute('data-filter');

            // D) Percorre todos os cards para decidir quem fica e quem sai
            todosCards.forEach(card => {
                const paisCard = card.getAttribute('data-pais');
                
                // Lógica: Se o filtro for 'todos' OU o país do card for igual ao filtro
                const deveAparecer = (filtroSelecionado === 'todos') || (paisCard === filtroSelecionado);

                if (deveAparecer) {
                    // MOSTRAR O CARD
                    card.classList.remove('escondido');
                    
                    // Pequeno delay para a animação visual funcionar suavemente
                    setTimeout(() => {
                        card.classList.add('visivel');
                        card.style.display = 'flex';
                    }, 50);

                } else {
                    // ESCONDER O CARD
                    card.classList.remove('visivel'); // Tira a animação de entrada
                    card.classList.add('escondido');  // Adiciona a classe que some (display: none)
                }
            });
        });
    });
});