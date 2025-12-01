document.addEventListener('DOMContentLoaded', () => {
    // Pega o ID da URL (ex: ?id=kuchisake)
    const urlParams = new URLSearchParams(window.location.search);
    const idDaLenda = urlParams.get('id'); 

    const container = document.querySelector('.historia-container');
    
    if (idDaLenda) {        
        // 1. Esconde todas as lendas primeiro
        const todasLendas = document.querySelectorAll('.lenda-completa');
        todasLendas.forEach(lenda => {
            lenda.style.display = 'none';
        });

        // 2. Tenta encontrar a lenda específica
        const lendaParaMostrar = document.getElementById(idDaLenda);
        
        if (lendaParaMostrar) {
            // Se achou, mostra ela e rola a tela
            lendaParaMostrar.style.display = 'block'; 
            lendaParaMostrar.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // Se o ID estiver errado na URL, mostra todas como fallback
            console.error(`Lenda com ID "${idDaLenda}" não encontrada.`);
            todasLendas.forEach(lenda => {
                lenda.style.display = 'block';
            });
        }
        
    } else {
        // Se não tiver ID na URL, mostra tudo
        console.log('Nenhum ID de lenda especificado. Exibindo todas as histórias.');
    }
});