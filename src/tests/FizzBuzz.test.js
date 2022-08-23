import FizzBuzz from "../scripts/FizzBuzz.js";
import FizzBuzz from "../scripts/FizzBuzz.js";
import FizzBuzz from "../scripts/FizzBuzz.js";
import FizzBuzz from "../scripts/FizzBuzz.js";

describe('FizzBuzz', () => 
{
    test('should return Fizz if number is divisible for 3', () => {
        let numb1 = 3;
        const FizzBuzz = new FizzBuzz;
        const result  = FizzBuzz.isDivisible(numb1)
        expect(result).toBe('Fizz')
    });
    
    test('should return Buzz if number is divisible for  5', () => {
        let numb1 = 5
        const FizzBuzz = new FizzBuzz;
        const result  = FizzBuzz.isDivisible (numb1)
        expect (result).toBe('Buzz')
    });
    
    test('should return FizzBuzz if number is divisible for 3 and  5', () => {
        let numb1 = 15
        const FizzBuzz = new FizzBuzz;
        const result  = FizzBuzz.isDivisible (numb1)
        expect (result).toBe('FizzBuzz')
    });
})