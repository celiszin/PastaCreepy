document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 });

    const cardsParaAnimar = document.querySelectorAll('.card-lenda');
    cardsParaAnimar.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });

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

    
    const iconesBandeira = document.querySelectorAll('.icone-bandeira');
    const todosCards = document.querySelectorAll('.card-lenda');

    iconesBandeira.forEach(icone => {
        icone.addEventListener('click', () => {
            
       
            iconesBandeira.forEach(b => b.classList.remove('ativo'));
       
            icone.classList.add('ativo');

        
            const filtroSelecionado = icone.getAttribute('data-filter');

            todosCards.forEach(card => {
                const paisCard = card.getAttribute('data-pais');

                if (filtroSelecionado === 'todos') {
                    card.classList.remove('escondido');
                    setTimeout(() => {
                        card.style.display = 'flex';
                    }, 10);
                } else {
                    if (paisCard === filtroSelecionado) {
                        card.classList.remove('escondido');
                    } else {
                        card.classList.add('escondido');
                    }
                }
            });
        });
    });
});