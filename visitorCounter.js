// Função para atualizar o contador de visitas
function updateVisitorCounter() {
    // Verifica se já existe um contador no localStorage
    let visitCount = localStorage.getItem('visitCount');
    
    // Se não existir, inicializa com 1
    if (!visitCount) {
        visitCount = 1;
    } else {
        // Se existir, incrementa
        visitCount = parseInt(visitCount) + 1;
    }
    
    // Salva o novo valor no localStorage
    localStorage.setItem('visitCount', visitCount);
    
    // Atualiza o elemento HTML com o contador
    const counterElement = document.getElementById('visitorCounter');
    if (counterElement) {
        counterElement.textContent = `Visitantes: ${visitCount}`;
    }
}

// Chama a função quando a página carregar
window.onload = updateVisitorCounter; 