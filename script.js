// Função para verificar se o modo escuro está ativado
function isDarkModeEnabled() {
    return document.body.classList.contains('dark-mode');
}

// Função para alternar entre os modos claro e escuro
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um ouvinte de evento para alternar o modo escuro ao clicar no botão
    document.getElementById('dark-mode-toggler').addEventListener('click', toggleDarkMode);
});
