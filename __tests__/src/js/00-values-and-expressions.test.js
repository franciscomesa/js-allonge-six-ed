/**
 * 

 Chapter: Prelude: Values and Expressions over Coffee

 */


/* values are expressions 
-----------------------------------------

A number is a value and also an expression

*/
/*
Values and identity
-----------------------------------------
=== Operator
    1) Different types
    2) same type, different content
    3) same type, same content
    4) same type, same content, not identical (instances)


 */

describe('Prelude: Values and Expressions over Coffee', () => {
/*
    values are expressions. No tests
*/

    describe('Values and identity', () => {

        test('Two values identical: 2 === 2', () => {
            expect(2 === 2).toBe(true);
        });

        test('1. Diferent kinds. Value vs string value: 2 is not "2"', () => {
            expect(2 == '2').toBe(true);
            expect(2 === '2').not.toBe(true);
            expect(true === 'true').not.toBe(true);
        });

        test('2. Same type, different content: true is not false', () => {
            expect(true).not.toBe(false);
        });

        test('2. Same type, different content: 2 is not 5', () => {
            expect(2).not.toBe(5);
            expect("two").not.toBe("five");
        });

        test('2. Same type, different content: "two" is not "five"', () => {
            expect("two").not.toBe("five");
        });

    });

    describe('Value types', () => {
        test('3. Same type, same contents: 2 + 2 === 4', () => {
            expect(2 + 2 === 4).toBe(true);
            expect((2 + 2 === 4) === (2 !== 5)).toBe(true);
        });
    });

    describe('Reference types', () => {
        test('4. Same type, same contents, but not identical (Arrays are generated unique and not identical to any other) [1, 2, 3] !== [1,2,3]', () => {
            expect([2-1, 2, 2+1] === [1,2,3]).not.toBeTruthy();
            expect([1, 2, 3] === [1,2,3]).toBeFalsy();
            expect([1, 2, 3] !== [1,2,3]).toBeTruthy();
        });
    });


});
