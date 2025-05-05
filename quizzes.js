// Banco de preguntas para el quiz
const quizzes = [
    {
        question: "¿Qué lenguaje de programación se considera el 'padre' de muchos lenguajes modernos?",
        options: [
            "Java",
            "C",
            "Python",
            "JavaScript"
        ],
        correctIndex: 1,
        explanation: "C, desarrollado en 1972, ha influenciado directamente a lenguajes como C++, Java, C# y muchos otros."
    },
    {
        question: "¿Qué estructura de datos funciona con el principio FIFO (First In, First Out)?",
        options: [
            "Pila (Stack)",
            "Cola (Queue)",
            "Árbol (Tree)",
            "Grafo (Graph)"
        ],
        correctIndex: 1,
        explanation: "Una Cola (Queue) sigue el principio FIFO, donde el primer elemento en entrar es el primero en salir."
    },
    {
        question: "En programación orientada a objetos, ¿qué término describe la capacidad de un objeto de tomar muchas formas?",
        options: [
            "Herencia",
            "Encapsulamiento",
            "Polimorfismo",
            "Abstracción"
        ],
        correctIndex: 2,
        explanation: "El polimorfismo permite que objetos de diferentes clases respondan al mismo mensaje (método) de manera diferente."
    },
    {
        question: "¿Qué tipo de lenguaje es JavaScript?",
        options: [
            "Compilado",
            "Interpretado",
            "De máquina",
            "De marcado"
        ],
        correctIndex: 1,
        explanation: "JavaScript es un lenguaje interpretado que se ejecuta en el navegador, aunque los motores modernos usan JIT compilation."
    },
    {
        question: "¿Qué método HTTP se utiliza para solicitar datos de un recurso específico?",
        options: [
            "POST",
            "PUT",
            "GET",
            "DELETE"
        ],
        correctIndex: 2,
        explanation: "El método GET se utiliza para solicitar datos de un recurso específico en las APIs REST."
    },
    {
        question: "¿Qué estructura de control se utiliza para manejar excepciones en JavaScript?",
        options: [
            "if-else",
            "for",
            "try-catch",
            "switch"
        ],
        correctIndex: 2,
        explanation: "try-catch permite manejar excepciones (errores) que pueden ocurrir durante la ejecución del código."
    },
    {
        question: "En bases de datos, ¿qué significa SQL?",
        options: [
            "Structured Query Language",
            "Simple Question Language",
            "System Query Logic",
            "Standard Question Line"
        ],
        correctIndex: 0,
        explanation: "SQL significa Structured Query Language, el lenguaje estándar para interactuar con bases de datos relacionales."
    },
    {
        question: "¿Qué paradigma de programación se centra en el uso de funciones puras y evita el estado mutable?",
        options: [
            "Programación orientada a objetos",
            "Programación funcional",
            "Programación procedural",
            "Programación lógica"
        ],
        correctIndex: 1,
        explanation: "La programación funcional enfatiza el uso de funciones puras (sin efectos secundarios) y datos inmutables."
    },
    {
        question: "¿Qué herramienta se utiliza para controlar versiones de código?",
        options: [
            "Git",
            "NPM",
            "Webpack",
            "Docker"
        ],
        correctIndex: 0,
        explanation: "Git es un sistema de control de versiones distribuido ampliamente utilizado en desarrollo de software."
    },
    {
        question: "En CSS, ¿qué propiedad se utiliza para cambiar el espacio entre las letras?",
        options: [
            "line-height",
            "word-spacing",
            "letter-spacing",
            "text-indent"
        ],
        correctIndex: 2,
        explanation: "La propiedad letter-spacing controla el espacio entre caracteres en un texto."
    }
];