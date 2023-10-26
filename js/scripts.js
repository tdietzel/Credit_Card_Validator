function cardValid(textInput) {
  if (!textInput) {
    return "Please enter a valid credit card number.";
  } else {
    let textArray = textInput.length;
    cardCompany(textInput, textArray)
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

function cardCompany (textInput, textArray) {
    let numCompany = parseInt(textInput.slice(0,2))
    let firstNum = parseInt(textInput.slice(0,1))
    if (numCompany === 34 && textArray === 15 || numCompany === 37 && textArray === 15) {
        return console.log("American Express: 15")
    } else if (firstNum === 4) {
      return console.log("Visa: 16")
    } else if (firstNum === 5) {
      return console.log("Mastercard: 16")
    } else if (firstNum === 6) {
      return console.log("Discover: 16")
    }
    return console.log("Not an accredited CC")
}