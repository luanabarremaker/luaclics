// Função para dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

     // Verifica se o modo escuro está ativado e adiciona/remove a classe ao botão conforme necessário
     var darkModeEnabled = document.body.classList.contains('dark-mode');
     var navbarToggler = document.getElementById('dark-mode-toggler');
     if (navbarToggler) {
         if (darkModeEnabled) {
             navbarToggler.classList.add('dark-mode');
         } else {
             navbarToggler.classList.remove('dark-mode');
         }
     }
}
