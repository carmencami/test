const fromEurotoDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar
}

const fromDollartoYen = function(valueInDollar){
    // convertimos el valor a yen
    let valueInYen = valueInDollar * 106.5;
    // retornamos el valor
    return valueInYen
}

const fromYentoPound = function(valueInYen){
    // convertimos el valor a pound
    let valueInPound = valueInYen * 97.14;
    // retornamos el valor
    return valueInPound
}




module.exports = {fromEurotoDollar, fromDollartoYen, fromYentoPound}



