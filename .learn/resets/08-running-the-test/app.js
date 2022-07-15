
const fromDollartoYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYen
}
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


module.exports = {fromDollartoYen,sum}

