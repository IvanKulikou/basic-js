const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    this.checkInputs(message, key);

    const keyRepeated = this.repeatKey(message, key);
    let result = '';

    for (let i = 0; i < message.length; i++) {
      if (this.isUppercase(message[i])) {
        const messageIndex = this.alphabet.indexOf(message[i]);
        const keyIndex = this.alphabet.indexOf(keyRepeated[i]);
        const encryptedIndex = (messageIndex + keyIndex) % 26;
        result += this.alphabet[encryptedIndex];
      } else {
        result += message[i];
      }
    }

    return this.finalizeResult(result);
  }

  decrypt(encryptedMessage, key) {
    this.checkInputs(encryptedMessage, key);

    const keyRepeated = this.repeatKey(encryptedMessage, key);
    let result = '';

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (this.isUppercase(encryptedMessage[i])) {
        const encryptedIndex = this.alphabet.indexOf(encryptedMessage[i]);
        const keyIndex = this.alphabet.indexOf(keyRepeated[i]);
        const decryptedIndex = (encryptedIndex - keyIndex + 26) % 26;
        result += this.alphabet[decryptedIndex];
      } else {
        result += encryptedMessage[i];
      }
    }

    return this.finalizeResult(result);
  }

  repeatKey(message, key) {
    const keyRepeated = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.isUppercase(message[i])) {
        keyRepeated.push(key[keyIndex % key.length].toUpperCase());
        keyIndex++;
      } else {
        keyRepeated.push(message[i]);
      }
    }

    return keyRepeated.join('');
  }

  isUppercase(char) {
    return /[A-Z]/.test(char);
  }

  checkInputs(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Both message and key should be strings');
    }
  }

  finalizeResult(result) {
    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
