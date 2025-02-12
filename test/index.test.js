const assert = require('assert');
const sumar = require('../src/index');

// Grupos o set de pruebas
describe("Comprobar la suma de 2 numeros",()=>{
    // Positivo: Afirmar que 5 + 5 = 10
    it("5 + 5 es 10", ()=>{
        assert.equal(10, sumar(5, 5));
    });

    // Negativo: Afirmar que 5 + 5 != 55
    it("5 + 5 no es igual a 55", ()=>{
        assert.notEqual(55, sumar(5, 5));
    });
});