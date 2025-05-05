// Desafíos de programación
const codingChallenges = [
    {
        title: "Suma de dos números",
        description: "Escribe una función que tome dos números como argumentos y devuelva su suma.",
        example: "suma(2, 3) debería devolver 5",
        startingCode: "function suma(a, b) {\n  // Tu código aquí\n}",
        testCode: `
            let testPassed = true;
            
            if (suma(2, 3) !== 5) testPassed = false;
            if (suma(-1, 1) !== 0) testPassed = false;
            if (suma(0, 0) !== 0) testPassed = false;
            if (suma(10, -5) !== 5) testPassed = false;
            
            console.log('Pruebas completadas.');
        `
    },
    {
        title: "Factorial de un número",
        description: "Escribe una función que calcule el factorial de un número entero no negativo.",
        example: "factorial(5) debería devolver 120 (5! = 5 × 4 × 3 × 2 × 1 = 120)",
        startingCode: "function factorial(n) {\n  // Tu código aquí\n}",
        testCode: `
            let testPassed = true;
            
            if (factorial(0) !== 1) testPassed = false;
            if (factorial(1) !== 1) testPassed = false;
            if (factorial(5) !== 120) testPassed = false;
            if (factorial(7) !== 5040) testPassed = false;
            
            console.log('Pruebas completadas.');
        `
    },
    {
        title: "Palíndromo",
        description: "Escribe una función que determine si una palabra es un palíndromo (se lee igual al derecho y al revés).",
        example: "esPalindromo('reconocer') debería devolver true",
        startingCode: "function esPalindromo(palabra) {\n  // Tu código aquí\n}",
        testCode: `
            let testPassed = true;
            
            if (esPalindromo('reconocer') !== true) testPassed = false;
            if (esPalindromo('oso') !== true) testPassed = false;
            if (esPalindromo('programacion') !== false) testPassed = false;
            if (esPalindromo('Anita lava la tina') !== true) testPassed = false;
            
            console.log('Pruebas completadas.');
        `
    },
    {
        title: "Número primo",
        description: "Escribe una función que determine si un número es primo (solo divisible por 1 y por sí mismo).",
        example: "esPrimo(7) debería devolver true",
        startingCode: "function esPrimo(numero) {\n  // Tu código aquí\n}",
        testCode: `
            let testPassed = true;
            
            if (esPrimo(2) !== true) testPassed = false;
            if (esPrimo(7) !== true) testPassed = false;
            if (esPrimo(10) !== false) testPassed = false;
            if (esPrimo(1) !== false) testPassed = false;
            
            console.log('Pruebas completadas.');
        `
    },
    {
        title: "Fibonacci",
        description: "Escribe una función que devuelva el n-ésimo número en la secuencia de Fibonacci.",
        example: "fibonacci(6) debería devolver 8 (la secuencia es 0, 1, 1, 2, 3, 5, 8, ...)",
        startingCode: "function fibonacci(n) {\n  // Tu código aquí\n}",
        testCode: `
            let testPassed = true;
            
            if (fibonacci(0) !== 0) testPassed = false;
            if (fibonacci(1) !== 1) testPassed = false;
            if (fibonacci(6) !== 8) testPassed = false;
            if (fibonacci(10) !== 55) testPassed = false;
            
            console.log('Pruebas completadas.');
        `
    },
    {
        title: "Contar vocales",
        description: "Escribe una función que cuente el número de vocales en una cadena de texto.",
        example: "contarVocales('Hola Mundo') debería devolver 4",
        startingCode: "function contarVocales(texto) {\n  // Tu código aquí\n}",
        testCode: `
            let testPassed = true;
            
            if (contarVocales('Hola Mundo') !== 4) testPassed = false;
            if (contarVocales('JavaScript') !== 3) testPassed = false;
            if (contarVocales('xyz') !== 0) testPassed = false;
            if (contarVocales('AEIOUaeiou') !== 10) testPassed = false;
            
            console.log('Pruebas completadas.');
        `
    },
    {
        title: "Ordenar array",
        description: "Escribe una función que ordene un array de números en orden ascendente (sin usar el método sort()).",
        example: "ordenarArray([3, 1, 4, 2]) debería devolver [1, 2, 3, 4]",
        startingCode: "function ordenarArray(arr) {\n  // Tu código aquí\n}",
        testCode: `
            let testPassed = true;
            
            const test1 = ordenarArray([3, 1, 4, 2]);
            if (JSON.stringify(test1) !== JSON.stringify([1, 2, 3, 4])) testPassed = false;
            
            const test2 = ordenarArray([10, -5, 0, 3]);
            if (JSON.stringify(test2) !== JSON.stringify([-5, 0, 3, 10])) testPassed = false;
            
            const test3 = ordenarArray([1, 1, 1, 1]);
            if (JSON.stringify(test3) !== JSON.stringify([1, 1, 1, 1])) testPassed = false;
            
            console.log('Pruebas completadas.');
        `
    },
    {
        title: "Mayor número",
        description: "Escribe una función que encuentre el mayor número en un array (sin usar Math.max()).",
        example: "encontrarMayor([1, 5, 2, 9, 3]) debería devolver 9",
        startingCode: "function encontrarMayor(arr) {\n  // Tu código aquí\n}",
        testCode: `
            let testPassed = true;
            
            if (encontrarMayor([1, 5, 2, 9, 3]) !== 9) testPassed = false;
            if (encontrarMayor([-10, -5, -20]) !== -5) testPassed = false;
            if (encontrarMayor([42]) !== 42) testPassed = false;
            if (encontrarMayor([0, 0, 0]) !== 0) testPassed = false;
            
            console.log('Pruebas completadas.');
        `
    }
];