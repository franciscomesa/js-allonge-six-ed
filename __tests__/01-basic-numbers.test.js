/**
 * 

 Chapter: A Rich Aroma: Basic Numbers




Javascript has a collection of literals.

floating
    Professional programmers almost never use floating point numbers to represent monetary amounts


 */



 describe('floating: Computer\'s internal representation is BigInt64Array. We use numbers in base ten', () => {

    test('1.0 === 1.0', () => {
        expect(1.0 === 1.0).toBeTruthy();
    });

    test('1.0 + 1.0 === 2.0', () => {
        expect(1.0 + 1.0 === 2.0).toBeTruthy();
    });

    test('1.0 + 1.0 + 1.0 === 3.0', () => {
        expect(1.0 + 1.0 + 1.0 === 3.0).toBeTruthy();
    });

    test('0.1 + 0.1 + 0.1 !== 0.3', () => {
        expect(0.1 + 0.1 + 0.1 === 0.3).toBeFalsy();
    });

 });

 describe('operation on numbers', () => {
    test('Operation precedence: 2 * 5 + 1 = 11', () => {
        expect(2 * 5 + 1 === 11).toBeTruthy();
    });
    test('Operation precedence: 2 + 5 * 1 = 7', () => {
        expect(2 + 5 * 1 === 7).toBeTruthy();
    });

    test('Operation precedence modulus (remainder) and unary negation: - (457 % 3) = -1', () => {
        expect(- (457 % 3) === -1).toBeTruthy();
    });

});