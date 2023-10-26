function cardValid(textInput) {
  if (!textInput) {
    return "Please enter a valid credit card number.";
  } else {
    cardCompany(textInput)
    let textArray = textInput.length;
    if (textArray >= 15 && textArray <= 16) {
      const numArray = textInput.split('')
      const doubledNum = numArray.map((digit, index) => {
        digit = parseInt(digit);
        if (index % 2 != 0) {
            digit *= 2;
            if (digit >= 10) {
                let digitArray = String(digit).split('');
                return (parseInt(digitArray[0]) + parseInt(digitArray[1]))
            } else {
                return digit
            }
        } else {
          return digit
        }
      })
      let sum = 0
      doubledNum.forEach((num) => {
        sum += num
      })

      if (sum % 10 != 0) {
        return "This credit card is not valid"
      }

      return "This credit card is valid"
    } else {
      return "Please enter a valid credit card number.";
    }
  }
}

function cardCompany (textInput) {
    let numCompany = textInput.slice(0,2)
    numCompany = parseInt(numCompany)
    if (numCompany === 34 || numCompany === 37) {
        return console.log("American Express")
    }
    return console.log("Not an accredited CC")
}