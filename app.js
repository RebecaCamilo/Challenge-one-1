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

    alert(encryptedPhrase);

}


function changeElements() {
    var section = document.getElementsByClassName('main-content__result')[0];
    var section2 = document.getElementsByClassName('main-content__result')[1];
    var boyImage = document.getElementById('boy-image');
    var resultText = section.children[1];

    // Cria um novo elemento para substituir elemento1
    var newElement = document.createElement('textarea');

    // Substitui elemento1 pelo newElement
    section.replaceChild(newElement, boyImage);

    // Remove resultText
    section2.removeChild(resultText);

    alert("done");
}
