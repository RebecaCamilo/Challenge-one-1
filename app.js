/**
 * A letra "e" é convertida para "enter"
 * A letra "i" é convertida para "imes"
 * A letra "a" é convertida para "ai"
 * A letra "o" é convertida para "ober"
 * A letra "u" é convertida para "ufat"
 */

function encryptor() {
    let phrase = document.querySelector('textarea').value;

    // Mapear cada letra para sua substituição correspondente
    const vowelMapper = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    // Inicializar nova string para armazenar a phrase criptografada
    let encryptedPhrase = '';

    // Iterar sobre cada caractere da phrase original
    for (let i = 0; i < phrase.length; i++) {
        const currentCharacter = phrase[i];

        // Verificar se o caractere atual é uma vogal
        if (currentCharacter in vowelMapper) {            
            // Se for, adicionar sua substituição à nova phrase
            encryptedPhrase += vowelMapper[currentCharacter];
        } else {
            // Se não for, adicionar o caractere atual à nova phrase
            encryptedPhrase += currentCharacter;
        }
    }

    removeElementsFromResultSection();

    createNewTextareaAndCopyUserInput(encryptedPhrase);
    
    addButtonCopiar();

    alert(encryptedPhrase);

}

function removeElementsFromResultSection() {
    // Seleciona a seção e remove todos os elementos filhos
    const sectionResult = document.querySelector('.main-content__result');
    sectionResult.innerHTML = '';
}

function createNewTextareaAndCopyUserInput(encryptedPhrase) { 
    const sectionResult = document.querySelector('.main-content__result');

    // Cria um novo textarea
    const newTextArea = document.createElement('textarea');
    newTextArea.setAttribute('id', 'decryptTextarea');
    newTextArea.setAttribute('readonly', 'readonly');

    // Adiciona a classe à textarea
    newTextArea.classList.add('content__result__textarea');
  
    // Adiciona o novo textarea à seção
    sectionResult.appendChild(newTextArea);

    // Adiciona o texto criptografado ao textarea
    newTextArea.value = encryptedPhrase;
  }

  
function addButtonCopiar() {
    const sectionResult = document.querySelector('.main-content__result');

    // Cria um novo button
    const newButton = document.createElement('button');
    newButton.setAttribute('id', 'copyButton');
    newButton.textContent = 'Copiar';

    // Adiciona a classe à textarea
    newButton.classList.add('main-content__result-button');

    // Adiciona o novo textarea à seção
    sectionResult.appendChild(newButton);
}
