# Import the math functions, floor() and log()
from math import ceil, floor, log10


# Count quantity of digits in a number
def count_digits(number):
    num = abs(number)

    return floor(log10(num)) + 1


# Generate a number of factors based on weights with a quantity of digits
# i.e. for mod11 calculation you need weights from 2 to 7, if your number
# has more than 6 digits you should start over.
# For example, if the number to be checked hast 10 digits this functions
# will return 5_432_765_432
# It does it "copying" weights iter times and then substracting the excess
# of digits 
def generate_factors(digits, weights):
    output = 0
    # Calculate the number of iterations
    iters = ceil(digits / count_digits(weights))

    # "Copy" the weight by multiplying the lenght of the weight by the weight 
    # and adding to the output
    # for example for a weight of 321 and 3 iterations, the multiplier of the
    # first loop is 1, the second is 1000 and the third is 1_000_000. This will
    # give an output of 321 + 321_000 + 321_000_000 = 321_321_321
    for x in range(iters):
        output += weights * 10**(x * count_digits(weights))

    # Substract the excess from the output and returns it.
    # For the previous example, for an output of 321_321_321 and 7 digits
    # this will compute 320_000_000 and substract from the output to return 1_321_321
    return (output - (output // 10**digits * 10**digits))


# Generate a one digit number that can be used to check if a number is well written.
# This is based in mod11 method. The most documented weight are 765432 but a custom one
# could be entered.
# The function multiplies the number by its weights digit by digit and sum the results
# Then this result is modulo divided by 11 and then the reminder is substracted from 11
# and the result is the check digit. If the check digit is greater than 9, some action 
# should be taken. Inthis case is changed to 0. Eventually this action should admit to 
# be customized. Sometimes it is changed to a letter or sometimes this means that the 
# "number" is forbiden
def generate_check_digit(number, weights):
    digits = count_digits(number)
    factors = generate_factors(digits, weights)
    sum = 0

    for x in range(count_digits(number)):
        sum += (number % 10) * (factors % 10)
        number //= 10
        factors //= 10

    check = 11 - (sum % 11)

    if(check > 9):
        check = 0

    return check


factors = 765432
# print("Check digit: ", generate_check_digit(114145717, factors))
for x in range(114145700, 114145800):
    # print("No digits: ", x, "factors: ", generate_factors(x, factors))
    print(" Number-Check digit: ", x, "-", generate_check_digit(x, factors))

# factors_2 = 54321
# for x in range(1, 21, 3):
# print("No digits: ", x, "factors: ", generate_factors(x, factors_2))
