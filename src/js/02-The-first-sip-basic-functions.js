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

exports.secondSimplestFunction = () => 0;
exports.simplestPossibleBlock = () => {};
exports.blockWithOneExpression = () => { 2 + 2 };
exports.blockWithTwoExpression = () => { 1 + 1; 2 + 2 };
exports.blockWithCommaOperator = () => (1 + 1, 2 + 2);
exports.codeStatementWithReturn = () => { 1+1; return 2+2};
exports.codeStatementWithReturnDeadCode = () => {return 1+1; 2+2}; // Dead Code: 2+2
exports.diameterCalculator = (diameter) => diameter * 3.14159265;
exports.codeStatementImplicitReturn = () => 1 + 1;
exports.grandparentFunction = (x) => (y) => (z) => x + y + z;
exports.curryingGranparentFunction = (x, y, z) => x + y+ z;


exports.sum = (a, b) => a + b;
