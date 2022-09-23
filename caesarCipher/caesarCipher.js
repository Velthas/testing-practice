export { caesarCipher };

const caesarCipher = (function () {
  let codeShift = 5;

  // Change the cipher shift
  function shift(number) {
    codeShift = number;
  }

  function isUppercase(char) {
    return char === char.toUpperCase();
  }

  function cipher(string) {
    let cipherString = '';

    // Loop over the string one time
    for (let i = 0; i < string.length; i++) {
      // Verify that the char to shift is alphabetical
      if (string.charCodeAt(i) < 65
           || (string.charCodeAt(i) > 90 && string.charCodeAt(i) < 97)
           || string.charCodeAt(i) > 122) {
        cipherString += string[i]; // If it is not, no shift needed
        continue;
      }
      // Remember if a character is uppercase
      const isCharUppercase = isUppercase(string[i]);
      // Convert to lowercase and extract ASCII code
      const lowercaseChar = string[i].toLowerCase();
      const charCode = lowercaseChar.charCodeAt(0);
      // Shift the number, if it exceeds bounds wrap around
      const shiftedCharCode = charCode + codeShift > 122
        ? 96 + ((charCode + codeShift) - 122)
        : charCode + codeShift;

      // Change code to character, if was uppercase make it so
      const shiftedChar = isCharUppercase === true
        ? String.fromCharCode(shiftedCharCode).toUpperCase()
        : String.fromCharCode(shiftedCharCode);

      // Add character to the ciphered string.
      cipherString += shiftedChar;
    }

    // Once each character is shifted, return the ciphered string.
    return cipherString;
  }

  return { cipher, shift };
}());
