const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    this.checkParams(message, key);

    const encryptedMessage = this.processMessage(message, key, true);
    return this.isDirect
      ? encryptedMessage.join('')
      : encryptedMessage.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    this.checkParams(encryptedMessage, key);

    const decryptedMessage = this.processMessage(encryptedMessage, key, false);
    return this.isDirect
      ? decryptedMessage.join('')
      : decryptedMessage.reverse().join('');
  }

  checkParams(message, key) {
    if (!message || !key) {
      throw new Error('Message and key are required');
    }
  }

  processMessage(message, key, isEncrypt) {
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i].toUpperCase();
      if (/[A-Z]/.test(char)) {
        const shift =
          key[keyIndex % key.length].toUpperCase().charCodeAt(0) -
          'A'.charCodeAt(0);
        const modifiedChar = this.shiftChar(char, shift, isEncrypt);
        result.push(modifiedChar);
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    return result;
  }

  shiftChar(char, shift, isEncrypt) {
    const baseCharCode = 'A'.charCodeAt(0);
    const charCode = char.charCodeAt(0);

    const shiftedCharCode = isEncrypt
      ? ((charCode - baseCharCode + shift) % 26) + baseCharCode
      : ((charCode - baseCharCode - shift + 26) % 26) + baseCharCode;

    return String.fromCharCode(shiftedCharCode);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
