test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    const { fromEurotoDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEurotoDollar(3.5)).toBe(4.2); //1 uero son 1.2 dollars, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One yen should be 106.5 dollars", function(){
    // importo la funcion desde app.js
    const { fromDollartoYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollartoYen(3.5)).toBe(372.75); //1 dollar son 106.5 yen, entonces 3.5 euros deberian ser = (3.5 * 106.5)
})

test("One pound should be 97.14 yen", function(){
    // importo la funcion desde app.js
    const { fromYentoPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYentoPound(3.5)).toBe(339.99); //1 yen son 97.14, entonces 3.5 euros deberian ser = (3.5 * 97.14)
})