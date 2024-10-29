 const suma = function(num1,num2) {
    return num1+num2;
}
const resta = function(num1,num2) {
    return num1-num2;
}
const multiplicacion = function(num1,num2) {
    return num1*num2;
}
const division = function(num1,num2) {
    return num1/num2;
}
const total = function(num1,num2,num3,num4){
    return `la suma de los resultados de las operaciones es: ${num1+num2+num3+num4}`;
}

module.exports={
  suma,
  resta,
  multiplicacion,
  division,
  total
}