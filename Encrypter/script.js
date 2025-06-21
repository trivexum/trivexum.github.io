
const key = "Secret Key";

// Function to repeat the key for the length of the text
function repeatKey(text, key) {
    key = key.replace(/\s+/g, '');  // Remove spaces in the key
    while (key.length < text.length) {
        key += key;
    }
    return key.slice(0, text.length);
}

// Function to encrypt text using Vigenère Cipher
function encrypt(text, key) {
    let result = '';
    text = text.toUpperCase();
    key = repeatKey(text, key.toUpperCase());

    for (let i = 0; i < text.length; i++) {
        const textChar = text.charCodeAt(i);
        if (textChar >= 65 && textChar <= 90) {
            const textPos = textChar - 65;
            const keyPos = key.charCodeAt(i) - 65;
            const encryptedChar = String.fromCharCode(((textPos + keyPos) % 26) + 65);
            result += encryptedChar;
        } else {
            result += text[i];  // Non-alphabet characters remain unchanged
        }
    }
    return result;
}

// Function to decrypt text using Vigenère Cipher
function decrypt(text, key) {
    let result = '';
    text = text.toUpperCase();
    key = repeatKey(text, key.toUpperCase());

    for (let i = 0; i < text.length; i++) {
        const textChar = text.charCodeAt(i);
        if (textChar >= 65 && textChar <= 90) {
            const textPos = textChar - 65;
            const keyPos = key.charCodeAt(i) - 65;
            const decryptedChar = String.fromCharCode(((textPos - keyPos + 26) % 26) + 65);
            result += decryptedChar;
        } else {
            result += text[i];  // Non-alphabet characters remain unchanged
        }
    }
    return result;
}

// Main function to process cipher based on operation selected
function processCipher() {
    const text = document.getElementById('text').value;
    const operation = document.getElementById('operation').value;
    let result = '';

    if (operation === 'encrypt') {
        result = encrypt(text, key);
    } else {
        result = decrypt(text, key);
    }

    document.getElementById('result').value = result;
}