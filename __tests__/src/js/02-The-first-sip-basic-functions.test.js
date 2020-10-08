/**
 * 
 * Chapter 2: The first sip: Basic Functions
 *          El primer sorbo: funciones básicas
 * https://leanpub.com/javascriptallongesix/read#functions
        As Little As Possible About Functions, But No Less
        Ah. I’d Like to Have an Argument, Please.
        Closures and Scope
        That Constant Coffee Craving
        Naming Functions
        Combinators and Function Decorators
        Building Blocks
        Magic Names
        Summary

 */

 // Seen in https://github.com/mariasoria/JS-Allonge-test/blob/master/__test__/02_basicFunctions.test.js
const {
    secondSimplestFunction,
    simplestPossibleBlock,
    blockWithOneExpression,
    blockWithTwoExpression,
    blockWithCommaOperator,
    codeStatementWithReturn, 
    codeStatementWithReturnDeadCode,
    diameterCalculator,


    codeStatementImplicitReturn, 
    
    
    emptyBlock, 
    sum
} = require ('../../../src/js/02-The-first-sip-basic-functions');

describe('As Little As Possible About Functions, But No Less (Pag 7-15)', () => {
    /**
     * In JavaScript, functions are values and represent computations to be performed
     */

     /* (() => 0) // => [Function] */
     test('The second simplest possible function: () => 0', () => {
         /* Implicit return */
        // const secondsimplest = () => 0;
        expect( secondSimplestFunction() ).toBe(0);
        expect( secondSimplestFunction() ).toBeDefined();
     });

     test('Functions and identities: function is a reference type', () => {
        expect( ( () => 0) === ( () => 0) ).toBeFalsy();
        const testSecondSimplestFunction = secondSimplestFunction;
        expect( testSecondSimplestFunction === secondSimplestFunction ).toBeTruthy();
     });

     test('Applying functions: simplest, without arguments', () => {
        expect( (() => 0)() ).toBe(0);
     });

     /* Functions that return values and evaluate expressions */
     test('Functions that return values', () => {
        /* 
        Test can return ther value that 0 
        We can make a function that returns a value by putting the value to the right of the arrow.
        */
        expect( (() => 1)() ).toBe(1);
        expect( (() => 'Hello, Javascript')() ).toBe('Hello, Javascript');
        /* Special number */
        expect( (() => Infinity)() ).toBe(Infinity);
     });

     test('Functions that return values and evaluate expressions', () => {
        /* 
        Test can return ther value that 0 
        We can make a function that returns a value by putting the value to the right of the arrow.
        */
        expect( (() => 1+1)() ).toBe(2);
        expect( (() => 'Hello, ' + 'Javascript')() ).toBe('Hello, Javascript');
        /* Special number */
        expect( (() => Infinity * Infinity)() ).toBe(Infinity);
     });

     test('Functions can return the value of evaluation another function', () => {
        expect ( 
            (() =>
                (() => 0
                    )()
            )()  
        ).toBe(0);            
     });

     test ('commas: take two arguments, evaluates them both, and itself evaluates to the value of the right-hand argument', () => {
        expect( (1,2)).toBe(2);
        expect ( (1+1, 2+2) ).toBe(4);
    })

    test ('commas: We can use commas with functions to create functions that evaluate multiple expressions', () => {
        expect( 
            (
                () => (1+1, 2+2)
            )()
        ).toBe(4);  
    });

    /* In JavaScript, the absence of a value is written undefined, and it means there is no value. 
        It will crop up again. 
        undefined is its own type of value, and it acts like a value type: undefined 
        like NULL in SQL */
    test('the simplest possible block (is undefined))', () => {
        /* A block has zero or more statements, separated by semicolons */
        expect(simplestPossibleBlock()).toBeUndefined();
    });

    test('undefined type', () => {
        expect(undefined).toBeUndefined();
    })

    test ('undefined type is a value', () => {
        expect( undefined === undefined ).toBeTruthy();
        expect(simplestPossibleBlock() === simplestPossibleBlock()).toBeTruthy();
        expect(simplestPossibleBlock() === undefined).toBeTruthy();
    });

    test('undefined value can be geerated using void operator', () => {
        expect( void 0).toBeUndefined(); // By convention, use this
        expect( void 2).toBeUndefined();
        expect( void (2+2)).toBeUndefined(); //  is guaranteed to always work, so that’s what we will use
    });

    /* What's a statement? 1) An expresion */
    test('back on the block: a block with one or more expressions still evaluates to undefined', () => {
        expect( blockWithOneExpression() ).toBeUndefined();
        expect( blockWithTwoExpression() ).toBeUndefined();
    })

    test('A block with more than one expression does not behave like an expression constructed with the comma operator', () => {
        expect(blockWithCommaOperator() ).toBe(4);
    });

    test('Explicit function return a value: return keyword ', () => {
        expect (  ( () => {return 0} )()  ).toBe(0);
        expect (  ( () => {return 1} )()  ).toBe(1);
        expect (  ( () => {return 'Hello ' + 'World'} )()  ).toBe('Hello World');
    });

    test('return statement immediately terminates the function application and returns the result of evaluating its expression', () => {
        /* return statement is not an expression ( () => return 0 )() === ERROR */
        expect( codeStatementWithReturn() ).toBe(4);
        expect ( codeStatementWithReturnDeadCode() ).toBe(2);
    });

    test('functions that evaluate to functions (function on the right side): a function, that returns a function, that returns true', () =>  {
        /* ¿Podemos poner una expresión que se evalúa como una función en el lado derecho de una expresión de función? */
        expect(    (  () => () => true    )()        ).toBeTruthy();

    });

});

describe('Ah. I’d Like to Have an Argument, Please. (Pag 16-20)', () => {
    test('Function with an argument', () => {
        expect( ( (room) => {}  )()  ).toBeUndefined();
    });

    test('Function with two arguments', () => {
        expect( ( (room, board) => {}  )()  ).toBeUndefined();
    });

    test('Function with an argument and use it', () => {
        expect( diameterCalculator()  ).toBeNaN();
    });

    test('Function with an argument and use it', () => {
        expect( diameterCalculator(3)  ).not.toBeNaN();
    });

    test('Function with an argument and use it', () => {
        expect( diameterCalculator(2)  ).toBe(6.2831853);
    });

    test('Function with two arguments and use both', () => {
        expect( ( (room, board) => room + board  )(800, 150)  ).toBe(950);
    });


});

describe('Closures and Scope', () => {

});

describe('That Constant Coffee Craving', () => {

});

describe('Naming Functions', () => {

});

describe('Combinators and Function Decorators', () => {

});

describe('Building Blocks', () => {

});

describe('Magic Names', () => {

});

describe('Summary', () => {

});








