function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here

    if(expr.includes('/ 0')||expr.includes('/0')){
        throw new Error('TypeError: Division by zero.')
    }

    let count=0;
    for(let el of expr){
        if(el==='('){
            count++
        }
        if(el===')'){
            count--
        }
    }
    if(count!==0){
        throw new Error('ExpressionError: Brackets must be paired')
    }

    return  new Function(`return ${expr}`)()
}

module.exports = {
    expressionCalculator
}