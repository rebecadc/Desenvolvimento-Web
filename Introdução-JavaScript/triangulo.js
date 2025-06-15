function classificarTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 'Não é um triângulo';
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        return 'Não é um triângulo';
    }

    if (a === b && b === c) {
        return 'Equilátero';
    } else if (a === b || a === c || b === c) {
        return 'Isósceles';
    } else {
        return 'Escaleno';
    }
}
console.log(classificarTriangulo(2, 2, 2));
console.log(classificarTriangulo(3, 4, 4));
console.log(classificarTriangulo(3, 4, 5));
console.log(classificarTriangulo(0, 0, 0));
console.log(classificarTriangulo(2, 4, 2));
