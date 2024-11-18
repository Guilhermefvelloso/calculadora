let display = document.getElementById('display');

// Função para adicionar números e operadores ao display
function pressKey(key) {
  if (display.innerText === '0') {
    display.innerText = key;
  } else {
    display.innerText += key;
  }
}

// Função para limpar o display
function clearDisplay() {
  display.innerText = '0';
}

// Função para calcular o resultado
function calculate() {
  try {
    // Avalia a expressão no display
    const result = eval(display.innerText);
    // Verifica divisão por zero
    if (result === Infinity || isNaN(result)) {
      display.innerText = 'Erro';
    } else {
      display.innerText = result;
    }
  } catch (error) {
    display.innerText = 'Erro';
  }
}

// Lista de imagens
const images = [
  'images/background1.jpg',
  'images/background2.jpg',
  'images/background3.jpg',
  'images/background4.jpg'
];

let currentIndex = 0;

function changeBackground() {
  // Muda a imagem do fundo
  document.body.style.backgroundImage = `url('${images[currentIndex]}')`;

  
  // Atualiza o índice para a próxima imagem
  currentIndex = (currentIndex + 1) % images.length; // Loop infinito
}

// Troca a cada 5 segundos
setInterval(changeBackground, 5000);

// Inicializa com a primeira imagem
changeBackground();
