function cardValid(textInput) {
    if (!textInput) { 
        return "Please enter a valid credit card number.";
    } else {
        let textArray = textInput.length;
        if (textArray >= 15) {
            
        } else {
            return "Please enter a valid credit card number.";
        }
    }
}