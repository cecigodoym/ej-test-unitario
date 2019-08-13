var expect = requiere('cahi').expect;


//englobar diferentes casos de test sobre un mismo objeto o sobre una misma funcion - pide un string como titulo, y un callback
describe("probando la funcion suma()", function(){

  it("Suma de dos mas dos", function(){
    expect( sumar(2,2) ).to.be.equal(4); //la funcion dentro del expect
  })

  it("Suma dos numeros negativos", function(){
    var resultado = sumar (-3, -6); // la funcion en una variable, separada
    expect( resultado ).to.be.equal(-9);
  })
}); 
