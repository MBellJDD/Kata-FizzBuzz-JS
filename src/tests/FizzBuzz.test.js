import FizzBuzz from "../scripts/FizzBuzz";


describe('FizzBuzz', () => {
    test('should return 3', () => {
        const num1 = 3
        const FizzBuzz = new FizzBuzz;
        const result  = FizzBuzz.isDivisible(num1)
        expect(result).toBe('Fizz')
    })
    
    test('should return 3', () => {
        const num1 = 5
        const FizzBuzz = new FizzBuzz;
        const result  = FizzBuzz.isDivisible (num1)
        expect (result).toBe('Fizz')
    });
    
});