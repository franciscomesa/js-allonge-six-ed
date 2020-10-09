/**
 * 
 * Chapter 2: The first sip: Basic Functions
 *          El primer sorbo: funciones básicas
 * https://leanpub.com/javascriptallongesix/read#functions
        a As Little As Possible About Functions, But No Less
        b Ah. I’d Like to Have an Argument, Please.
        c Closures and Scope
        d That Constant Coffee Craving
        e Naming Functions
        f Combinators and Function Decorators
        g Building Blocks
        h Magic Names
        i Summary

 */
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


describe('That Constant Coffee Craving (Pag 26-38)', () => {
    test('Function with a parameter of PI and diameter: invocation naming arguments', () => {
        expect(
            ((PI) =>
                (diameter) => diameter * PI
            )(3.14159265)(2)
            ).toBe(6.2831853)
    });

    it('inside-out: Changing order of invocation', () => {
        expect((
            (diameter) =>
                ((PI) => diameter * PI
                )(3.14159265))(2))
            .toBe(6.2831853);
    });

    test('using two arguments together', () => {
        expect( ((diameter, PI) => diameter * PI)(2, 3.14159265)).toBe(6.2831853);
    })

    test('const: The const keyword introduces one or more bindings in the block that encloses it. Less cost than a function invocation', () => {
        /*
        we can’t use const when we write a fat arrow that has an expression as its body
        */
        expect(
            ((diameter) => {
                const PI = 3.14159265;
                return diameter * PI;
            })(2)
        ).toBe(6.2831853);
    });

    test('const can bind any expressions, functions too', () => {
        expect(

            ((d) =>  {
                const calc = (diameter) => {
                    const PI = 3.14159265;
                    return diameter * PI; 
                };
                return calc(d);
            })(2)

        ).toBe(6.2831853);
    });

    test('const can bind more that one name-value pair', () => {
        expect(

            ((d) =>  {
                const PI = 3.14159265,
                      calc = (diameter) => {
                    
                    return diameter * PI; 
                };
                return calc(d);
            })(2)

        ).toBe(6.2831853);
    });

    test ('nested blocks: if statements. Its clauses are statements or blocks', () => {
        expect(

            ((n) => {
                const even = (x) => {
                    if (x === 0)
                        return true;
                    else
                        return !even(x-1);
                }
                return even(n);
            })(13)
        ).toBe(false);
    });

    test ('nested blocks: Using blocks and consts in if statements', () => {
        expect(

            ((n) => {
                const even = (x) => {
                    if (x === 0)
                        return true;
                    else {
                        const odd = (y) => ! even(y);
                        return odd(x-1);
                    }
                }
                return even(n);
            })(42)
        ).toBe(true);
    });

    test('IIFE (Immediately Invoked Function Expression) and lexical scoping', () => {
        /*
            Patrón: https://developer.mozilla.org/en-US/docs/Glossary/Self-Executing_Anonymous_Function
            Al evaluar diameter_fn => (PI) => (diameter) => diameter * PI)(3.14159265)
                al evaluar la función se enlace PI con su valor

        */
       expect(
            (
                (diameter_fn) =>
                    diameter_fn(2)
                )( // parameter
                    ((PI) =>
                        (diameter) => diameter * PI
                        )(3.14159265)
            )
       ).toBe(6.2831853);
    });

    test('const and lexical scope: binding two different values to the "same" name. Testing conflicts with clousures', () => {
        /*
            PI use the value we bound in the environment surrounding (diameter) ⇒ diameter * PI.
                shadowed PI = 3;
        */
        expect(
            (
                (diameter_fn) =>
                    (
                        (PI) =>
                            diameter_fn(2)
                    )(3)
            )(// parameter
                (
                    (PI) =>
                        (diameter) => diameter * PI
                    )(3.14159265)
                )
       ).toBe(6.2831853);
    });

    test('const and lexical scope: binding two different values to the "same" name. Testing conflicts with consts', () => {
        /*
            Binding values to names with const works just like binding values to names with parameter invocations, it uses lexical scope
        */
        expect(
            (
                (diameter_fn) => {
                    const PI = 3;

                    return diameter_fn(2);
                }
            )( // parameter
                (() => {
                    const PI = 3.14159265;
                    return (diameter) => diameter * PI;
                })()
            )
       ).toBe(6.2831853);
    });

    test('Are consts also from a shadowy planet? Testing bind two different values to the same name, but one environment will be completely enclosed by the other', () => {
        
        expect(
            (            
                ((PI) =>
                    (diameter) => diameter * PI
                )(3.14159265)
            )(2)

        ).toBe(6.2831853);
        // IIFE testing previous function. Wrapping in another IIFE. Binding for PI in the closest parent environment
        expect(
            (   
                ((PI) =>         
                    ((PI) =>
                        (diameter) => diameter * PI
                    )(3.14159265)
                )(3)
            )(2)

        ).toBe(6.2831853);
    });

    test('IIFE and parameters: The inner binding does not overwrite the outer binding', () => {
        expect(
            
                ((PI) => {
                    ((PI) => {})(3);
                    return (diameter) => diameter * PI; 
                })
                (3.14159265)(2)
            
        ).toBe(6.2831853);
    });

    test('IIFE and const: names bound with const shadow enclosing bindings just like parameters', () => {
        expect(
            
                ((diameter) => {
                    const PI = 3.14159265;
                    
                    (() => {
                        const PI = 3;
                    })();

                    return diameter * PI; 
                })(2)
            
        ).toBe(6.2831853);
    });

    test('TODO. Pag. 36. const inside blocks: shadowing bindings', () => {
    });

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