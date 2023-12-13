const blog = {
  nombre: 'freeCodeCamp'
}
console.log('Antes de eval:', blog);

const clave = 'autor';
const valor = 'Tapas';
testEval = () => eval(`blog.${clave} = '${valor}'`);

// Llama a la funcion
testEval();

console.log('Despues de la magia de eval:', blog);