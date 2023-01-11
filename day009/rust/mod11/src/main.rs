use ilog::IntLog;

fn count_digits(number: i32) -> u32 {
    (i32::abs(number).log10() + 1).try_into().unwrap()
}

fn generate_factors(digits: u32, weights: u32) -> u64 {
    let mut output: u64 = 0;
    let ten: u64 = 10;
    let iters = ((digits / count_digits(weights as i32)) as f32).ceil() as u32 + 1;

    for x in 0..iters {
        output += weights as u64 * ten.pow(x * count_digits(weights as i32)) as u64;
    }

    output - (output / ten.pow(digits) * ten.pow(digits))
}


fn generate_check_digit(number: u32, weights: u32) -> u32 {
    let digits = count_digits(number as i32);
    let mut factors = generate_factors(digits, weights);
    let mut sum = 0;
    let mut temp:u64 = number as u64;

    for _x in 0..digits {
        sum += (temp % 10) * (factors % 10);
        temp /= 10;
        factors /= 10;
    }

    let mut check = 11 - (sum % 11);

    if check >= 10 {
        check = 0;
    }

    check as u32
}
fn main() {
    /*assert_eq!(count_digits(1), 1);
    assert_eq!(count_digits(15), 2);*/
    assert_eq!(generate_factors(3, 765432), 432);
    assert_eq!(generate_factors(9, 765432), 432765432);
    assert_eq!(generate_factors(14, 765432), 32765432765432);
    assert_eq!(generate_check_digit(112347658, 765432), 8);
}
