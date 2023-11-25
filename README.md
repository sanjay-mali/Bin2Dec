# Bin2Dec

#  Binary to Decimal Conversion in JavaScript 

### Overview 

Binary and decimal number systems are fundamental in computer science and mathematics. A binary number is expressed using only two digits, 0 and 1, whereas a decimal number uses ten digits (0-9). Converting a binary number to its decimal equivalent involves a straightforward process in JavaScript.


### Steps

Input Validation: The function verifies that the input is a valid binary string. It checks if the provided string contains only 0s and 1s using a regular expression (/^[01]+$/).

Conversion Algorithm: Utilizes the parseInt() function with a radix parameter set to 2 to convert the binary string to its decimal representation. The radix of 2 specifies that the input string should be interpreted as a binary number.


### Usage Notes
Valid Input: Ensure that the input provided to binaryToDecimal is a valid binary number containing only 0s and 1s. If the input includes other characters, an error will be thrown.

Conversion Mechanism: The function utilizes the parseInt() method with a radix of 2 to perform the conversion. This method interprets the input string as a binary number and returns its decimal representation.

### Conclusion
The binaryToDecimal function provides a convenient way to convert binary numbers to their decimal equivalents in JavaScript. Understanding this conversion is crucial for handling binary data and performing numerical operations in programming.



Link To acccess website - https://sanjay-mali.github.io/Bin2Dec/
