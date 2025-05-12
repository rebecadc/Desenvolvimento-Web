function calculadora(a, b, operador) {
    if (operador === '+') {
        return a + b;
    } else if (operador === '-') {
        return a - b;
    } else if (operador === '*') {
        return a * b;
    } else if (operador === '/') {
        if (b === 0) {
            return 'Erro: divisão por zero.';
        }
        return a / b;
    } else {
        return 'Operador inválido.';
    }
}

console.log(calculadora(8, 2, '*'));
console.log(calculadora(8, 0, '/')); 