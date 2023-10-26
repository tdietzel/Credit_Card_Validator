# Describe cardValid()

__Test #1:__ "It will return a statement if the input is blank."
__Code:__
let textInput = ""
cardValid(textInput)
__Expected Output:__ "Please enter a valid credit card number."

__Test #2:__ "It will return a statement if the input isn't atleast 15 characters."
__Code:__
let textInput = "12341234"
cardValid(textInput)
__Expected Output:__ "Please enter a valid credit card number."

__Test #3:__ "It will return a statement if the input is at most 16 characters."
__Code:__
let textInput = "12341234123412341"
cardValid(textInput)
__Expected Output:__ "Please enter a valid credit card number."