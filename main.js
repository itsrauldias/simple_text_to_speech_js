var apiSuportIndicator = document.getElementById('apiSuportIndicator');
var textValueToRead = document.getElementById('textValueToRead');


// cria uma nova instância da interface SpeechSynthesisUtterance
const utterance = new SpeechSynthesisUtterance();

if ('speechSynthesis' in window) {
    // Muda o texto de indicador de suporte
    apiSuportIndicator.innerHTML = "true";
    
    // define a voz usada para leitura em voz alta
    utterance.voice = speechSynthesis.getVoices()[0];
    
    // define a taxa de fala (1 = normal, <1 = lento, >1 = rápido)
    utterance.rate = 1;
    
    // define o volume (0 = silencioso, 1 = alto)
    utterance.volume = 1;
} else {
    // Muda o texto de indicador de suporte
    apiSuportIndicator.innerHTML = "false";
}

function readText() {
    utterance.text = textValueToRead.value;
    speechSynthesis.speak(utterance);
}