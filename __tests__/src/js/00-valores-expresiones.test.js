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


 */
test('Values and identity', () => {
    expect(2).toBe(2);
    expect('hello').not.toBe('goodbye');
});

test('Values and identity \
    (1) === Different types \
    2 is not "2" \
    "true" is not true ', () => {
    expect(2).not.toBe("2");
    expect('true').not.toBe(true);
});

test('Values and identity \
    (2) same type, different content \
    true is not false \
    2 is not 5 \
    "two" is not "five" ', () => {
    expect(true).not.toBe(false);
    expect(2).not.toBe(5);
    expect("two").not.toBe("five");
});




// VALUE (primitive) TYPES:
// number, symbol, boolean, null, undefined and string

// REFERENCE TYPES:
// array, functions

//describe('Prelude: Values and Expressions over Coffee', () => {
    it('2 is not "2"', () => {
        expect(2 === '2').toBe(false);
    }); 
    it('true is !== "true"', () => {
        expect(true !== 'true').toBe(true);
    });
    it('true === false is false', () => {
        expect(true === false).toBe(false);
    });
    it('"two" === "five" is false', () => {
        expect('two' === 'five').toBe(false);
    });
    // value types
    it('Evaluating an expression, it is identical to another value of the same type with the same “content".', () => {
        expect((2 + 2 === 4) === (2 !== 5)).toBe(true);
    });
    // reference types
    it('Arrays are generated unique and not identical to any other', () => {
        expect([2-1, 2, 2+1] === [1,2,3]).toBe(false);
    })
//});