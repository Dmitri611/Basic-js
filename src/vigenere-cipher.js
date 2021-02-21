let cipherTable = new Map();
const aCode = "A".charCodeAt(0);
for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
  cipherTable.set(String.fromCharCode(i), i - aCode);
}

class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isReverse = isDirect === false;
  }

  encrypt(message, key) {
    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();

    let result = "";
    let j = 0;
    for (let i = 0; i < upperMessage.length; i++) {
      let m = upperMessage[i];
      if (cipherTable.has(m)) {
        if (j === upperKey.length) {
          j = 0;
        }

        const c = (cipherTable.get(m) + cipherTable.get(upperKey[j])) % 26;
        result += String.fromCharCode(c + aCode);
        j++;
      } else {
        result += m;
      }
    }
    return this.isReverse ? result.split("").reverse().join("") : result;
  }

  decrypt(encryptedMessage, key) {
    const upperKey = key.toUpperCase();

    let result = "";
    let j = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      let c = encryptedMessage[i];

      if (cipherTable.has(c)) {
        if (j === upperKey.length) {
          j = 0;
        }
        const m = (cipherTable.get(c) - cipherTable.get(upperKey[j]) + 26) % 26;
        result += String.fromCharCode(m + aCode);
        j++;
      } else {
        result += c;
      }
    }
    return this.isReverse ? result.split("").reverse().join("") : result;
  }
}

module.exports = VigenereCipheringMachine;