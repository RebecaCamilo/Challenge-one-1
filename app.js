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

    // Adiciona o evento click ao botão
    newButton.addEventListener('click', function() {
        copyToClipboard('decryptTextarea');
    });

    // Adiciona o novo textarea à seção
    sectionResult.appendChild(newButton);
}

function copyToClipboard(elementId) {
    // Seleciona o elemento com o ID especificado
    const element = document.getElementById(elementId);

    // Copia o texto do elemento para a área de transferência do usuário
    navigator.clipboard.writeText(element.value) // Use element.value em vez de element.innerText
    .then(() => {
      alert('Texto copiado para a área de transferência');
    })
    .catch(err => {
        alert('Não foi possível copiar o texto para a área de transferência: ', err);
    });
}

function decryptor() {
    let encryptedPhrase = document.querySelector('textarea').value;
    // let decryptTextarea = document.getElementById('decryptTextarea').value;

    const regrasSubstituicao = [
        { padrao: /ai/g, substituicao: 'a' },
        { padrao: /enter/g, substituicao: 'e' },
        { padrao: /imes/g, substituicao: 'i' },
        { padrao: /ober/g, substituicao: 'o' },
        { padrao: /ufat/g, substituicao: 'u' }
    ];
  
    for (const regra of regrasSubstituicao) {
        encryptedPhrase = encryptedPhrase.replace(regra.padrao, regra.substituicao);
    }
  
    // Obtém o elemento HTML onde você deseja exibir a mensagem descriptografada
    let decryptTextarea = document.getElementById('decryptTextarea');

    // Define o texto descriptografado como o texto do elemento HTML
    decryptTextarea.value = encryptedPhrase;
  }
