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
    grandparentFunction,
    curryingGranparentFunction,

    codeStatementImplicitReturn
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
        expect( codeStatementImplicitReturn() ).toBe(2);
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
        /* 
        A return statement accepts any valid JavaScript expression.
        */
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

    /* return definition is recursive. we can write a function that returns a function, or an array that contains another array expression. Or a function that returns an array, an array of functions, a function that returns an array of functions, and so forth: */

    test ('call by value', () =>  {
        expect( diameterCalculator(1+1) ).toBe(6.2831853);
    } );
    
    test('variables and bindings', () => {
        /* Synchronize dictionary:   
            (diameter) => diameter * 3.14159265
            x => (y) => x
            -----
            first x   = argument
            y         = argument
            second x  = expression referring to a variable

            Las funciones generan entorno (skope) y binding valores
        */
    });

    test ('call by sharing (value types vs reference types): not modify primitive type arguments', () => {
        const PI = 3.14159265;
        expect(PI).toBe(3.14159265);
    });

    // JavaScript does not place copies of reference values in any environment. 
    // JavaScript places references to reference types in environments, and when the value needs to be used,
    // JavaScript uses the reference to obtain the original
    // Functions are referenced values
    test ('call by sharing (value types vs reference types): modify referenced value arguments', () => {
        const PI = 3.14159265;
        const doubleNumber = n => { 
                n = n * 2;
                return n;
            }
        const numberDoubled = doubleNumber(PI);
        expect(PI).toBe(3.14159265);
        expect(numberDoubled).toBe(6.2831853);
    });

    test ('call by sharing: modify referenced value arguments', () => {
        // a function will modify a reference passed as argument when modifying its attributes
        const original = {
            a: 1,
            b: 2
          };
    
          const doubleNumber = n => {
            n.a = n.a * 2;
            n.b = n.b * 2;
            return n;
          };
    
          const modified = doubleNumber(original);
          expect(original).toStrictEqual(modified);
    });

    test ('call by sharing: dont modify referenced value arguments using a local copy', () => {
        // a function will not modify a reference passed as argument if you create a new one
        const original = {
            a: 1,
            b: 2
          };
          const doubleNumber = n => {
              n = {
                a : n.a * 2,
                b : n.b * 2
                }
            return n;
          };
    
          const modified = doubleNumber(original);
          expect(original).not.toStrictEqual(modified);
          expect(original.a).toBe(1);
          expect(modified.a).toBe(2);
    });




});

describe('Closures and Scope [cierres y alcance] (Pag 21-25)', () => {

    test('Function within a function', () => {
        /* 
            ((x) => (y) => x)(1)(2) //=> 1
            ((x) => (y) => x)(1) //=> [Function]
            (y) => x
            ((y) => x)(2)
        */
        expect(((x) => (y) => x)(1)(2)).toBe(1);
    });

    test('if functions without free variables are pure, are closures impure?', () => {
        // Free variables: a variable which is not bound within the function
        //      (y) => x  // x is a free variable
        // PURE FUNCTIONS:  functions containing NO free variables, 
        //                    but they can contain a closure
        // CLOSURE:         function containing ONE or MORE free variables
        
        // (y) => x has a free variable, but all refers to "(x) =>", doesnt have a free variable
        expect(((x) => (y) => x)(1)(2)).toBe(1);
        
    });

    test('it’s always the environment', () => {
        /*
        I Combinator = Función identidad. (x) => x
        K Combinator = Kestrel            (y) => x  
        */
    });

    test('Functions can have grandparents too', () => {
        /*        
        https://en.wikipedia.org/wiki/Currying
        */

            expect(grandparentFunction(1)(2)(3)).toBe(6);
    });
    test('Currying: ', () => {
        /*
        Currying: technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.
        */
       expect( ( (x,y,z) => x + y + z )(1,2,3)).toBe(6);
       expect( curryingGranparentFunction(1, 2, 3)).toBe(6);
    });

    test('Shadowy variables from a shadowy planet: first x is overwrited by the second one', () => {
        /*  JavaScript always searches for a binding starting with the functions own environment and then each parent in turn until it finds one 
            When a variable has the same name as an ancestor environment’s binding, it is said to shadow the ancestor
        */

        expect( ( (x) => (x,y) => x + y )(4)(1, 2) ).toBe(3);
    });
    
    test ('which came first, the chicken or the egg?', () => {
        /*
        Javascript have allways Global environment

        Many programmers choose to write every JavaScript file like this:
            // top of the file
            (() => {
                // ... lots of JavaScript ...
            })();
            // bottom of the file

        */

    });

});
