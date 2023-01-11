# TODO

- [ ] Generate factors
- [ ] Calculate check digit

Factors are a sequence of numbers from 2 to 7 from the least significant digit to the most significant digit. If is required more than 7 numbers, then it should start again from 2. *i.e. for a sequence of 9 digits, the factor array should be:* ***[4, 3, 2, 7, 6, 5, 4, 3, 2]***

Receives an array of one digit numbers and calculates the check digit multiplying each number for its corresondent factor and sum the total. Then the total should be modulus divided by 11. Then substract the reminder from eleven and the result should be the digit. Some special cases applies.