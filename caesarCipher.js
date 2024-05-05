function caesarCipher(str, shiftFactor) {
  shiftFactor = shiftFactor % 26;
  let lowerCaseStr = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newStr = "";

  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currentLetter = lowerCaseStr[i];
    if (currentLetter === " ") {
      newStr += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + shiftFactor;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    } else {
      newStr += alphabet[newIndex];
    }
  }

  return newStr;
}

module.exports = caesarCipher;
