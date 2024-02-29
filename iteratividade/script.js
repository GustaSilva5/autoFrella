// Variáveis globais
let index = 0; // Índice do slide atual
const slides = document.querySelectorAll(".slide"); // Seleciona todos os slides
const progressBar = document.querySelector(".progress-bar"); // Barra de progresso
let intervalId; // Identificador do intervalo de tempo para o slideshow

// Função para exibir o slide atual
function showSlide() {
  slides.forEach(function(slide) {
    slide.style.display = "none"; // Oculta todos os slides
  });
  slides[index].style.display = "block"; // Exibe o slide atual
}

// Função para avançar para o próximo slide
function nextSlide() {
  index = (index + 1) % slides.length; // Incrementa o índice do slide, garantindo que ele permaneça dentro dos limites
  showSlide(); // Exibe o novo slide
}

// Função para retroceder para o slide anterior
function prevSlide() {
  index = (index - 1 + slides.length) % slides.length; // Decrementa o índice do slide, garantindo que ele permaneça dentro dos limites
  showSlide(); // Exibe o novo slide
}

// Função para iniciar o slideshow automaticamente
function startSlideshow() {
  intervalId = setInterval(function() {
    nextSlide(); // Chama a função para avançar para o próximo slide
  }, 5000); // Intervalo de 5 segundos
}

// Função para atualizar a barra de progresso
function updateProgressBar() {
  progressBar.style.width = "100%"; // Define a largura da barra de progresso como 100%
  setTimeout(function() {
    progressBar.style.width = "0"; // Após um pequeno intervalo, redefine a largura da barra de progresso como 0
  }, 10); // Aguarda um pequeno intervalo antes de redefinir a barra de progresso
}

// Inicia o slideshow automaticamente
startSlideshow();

// Atualiza a barra de progresso a cada 5 segundos
setInterval(updateProgressBar, 5000);
