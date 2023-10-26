function cardValid(textInput) {
  if (!textInput) {
    return "Please enter a valid credit card number.";
  } else {
    let textArray = textInput.length;
    if (textArray >= 15 && textArray <= 16) {
      const numArray = textInput.split('')
      const doubledNum = numArray.map((digit, index) => {
        digit = parseInt(digit);
        if (index % 2 != 0) {
          return digit * 2
        } else {
          return digit
        }
      })
      console.log(doubledNum)
      const newCreditNum = doubledNum.join("")
      return newCreditNum
    } else {
      return "Please enter a valid credit card number.";
    }
  }
}