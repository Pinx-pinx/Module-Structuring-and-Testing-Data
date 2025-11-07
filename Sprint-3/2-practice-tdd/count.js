function countChar(stringOfCharacters, findCharacter) {
  let charcount = 0;

  for (let count = 0; count < stringOfCharacters.length; count++) {
    if (stringOfCharacters[count] === findCharacter) {
      charcount++;
    }
  }

  return charcount;
}

module.exports = countChar;
