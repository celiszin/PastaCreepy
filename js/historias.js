
document.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const idDaLenda = urlParams.get('id'); 

    const container = document.querySelector('.historia-container');
    
    if (idDaLenda) {        
        const todasLendas = document.querySelectorAll('.lenda-completa');
        todasLendas.forEach(lenda => {
            lenda.style.display = 'none';
        });
        const lendaParaMostrar = document.getElementById(idDaLenda);
        if (lendaParaMostrar) {
            lendaParaMostrar.style.display = 'block'; 
            lendaParaMostrar.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error(`Lenda com ID "${idDaLenda}" não encontrada.`);
            todasLendas.forEach(lenda => {
                lenda.style.display = 'block';
            });
        }
        
    } else {

        console.log('Nenhum ID de lenda especificado. Exibindo todas as histórias.');
    }
});
