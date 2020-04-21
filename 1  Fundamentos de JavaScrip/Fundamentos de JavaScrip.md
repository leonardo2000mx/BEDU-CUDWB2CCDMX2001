I.Responde las siguientes preguntas:
A.¿Cuál es la ventaja de que JavaScript sea un lenguaje interpretado-compilado?
Al compilarse se tiene una optimización de código, al ser interpretado sigue siendo un lenguaje multiplataforma

B.¿Cuál es la diferencia entre null y undefined?
Undefined, es el valor que tiene una variable a la cual no se le ha asignado ningún valor. Es la forma en que JS dice que no sabe que es esa variable.

Null, significa que la variable no tiene ningún valor


C.Explica el concepto de ​type coercion
Javascript trata de convertir el valor de una variable a algún tipo de dato que maneje JS

II.Calcula el valor booleano de las siguientes expresiones lógicas

true && !(false===!Infinity)-------False

null!==undefined && !" "-------False

III.Implementa una función llamada ​isFalsy​ que dado cualquier valor comoparámetro indica si es falso.

function isFalsy(x){ console.log(x != x)}