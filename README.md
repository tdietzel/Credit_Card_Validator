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

__Test #4:__ "It will return the number with every other digit doubled"
__Code:__
let textInput = "1234123412341234"
cardValid(textInput)
__Expected Output:__ "143143814381438."

__Test #5:__ "It will return the sum of both digits if the number is >= 10."
__Code:__
let textInput = "1234567890123456"
cardValid(textInput)
__Expected Output:__ "1438537790143853"

__Test #5:__ "It will return not valid if the sum of all digits does not end in a zero"
__Code:__
let textInput = "1234567890123456"
cardValid(textInput)
__Expected Output:__ "This credit card is not valid"

# Describe cardCompany()

__Test #1:__ "It will return American Express if the card begins with 34 or 37."
__Code:__
let textInput = "37020808604356"
cardCompany(textInput)
__Expected Output:__ "American Express"

__Test #2:__ "It will return Visa if the card begins with 4."
__Code:__
let textInput = "47020808604356"
cardCompany(textInput)
__Expected Output:__ "Visa"

__Test #3:__ "It will return Mastercard if the card begins with 5."
__Code:__
let textInput = "57020808604356"
cardCompany(textInput)
__Expected Output:__ "Mastercard"

__Test #4:__ "It will return Discover if the card begins with 6."
__Code:__
let textInput = "67020808604356"
cardCompany(textInput)
__Expected Output:__ "Discover"

__Test #5:__ "It will include the length of their credit card if its valid."
__Code:__
let textInput = "340208086043562"
cardValid(textInput)
__Expected Output:__ American Express: 15