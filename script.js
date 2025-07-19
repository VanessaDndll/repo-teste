function mostrarHelloWorld() {
    const p = document.getElementById("local");
    p.textContent = "Hello world!"
}

function somar(n1, n2){ // parametro
  const result = n1 + n2
  return result
  console.log('Teste de após return.'); // inacessível por estar depois do return ^_+
  
}
console.log(somar(2, 4)); // argumento
