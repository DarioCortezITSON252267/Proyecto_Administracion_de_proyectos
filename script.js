document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const gameOptions = document.querySelectorAll('.game-option');
    const gameContainer = document.getElementById('game-container');
    const usernameElement = document.getElementById('username');
    const userLevelElement = document.getElementById('user-level');
    const userPointsElement = document.getElementById('user-points');
    const progressBar = document.getElementById('progress-bar');
    
    // Datos del usuario
    let user = {
        name: 'Invitado',
        level: 1,
        points: 0,
        xp: 0,
        xpToNextLevel: 100
    };
    
    // Actualizar perfil de usuario
    function updateUserProfile() {
        usernameElement.textContent = user.name;
        userLevelElement.textContent = user.level;
        userPointsElement.textContent = user.points;
        progressBar.style.width = `${(user.xp / user.xpToNextLevel) * 100}%`;
    }
    
    // Cargar juego seleccionado
    function loadGame(gameType) {
        gameContainer.innerHTML = '';
        
        switch(gameType) {
            case 'quiz':
                loadQuizGame();
                break;
            case 'wordsearch':
                loadWordSearchGame();
                break;
            case 'coding':
                loadCodingChallenge();
                break;
            default:
                gameContainer.innerHTML = '<p>Selecciona un juego para comenzar.</p>';
        }
    }
    
    // Cargar juego de quiz
    function loadQuizGame() {
        gameContainer.innerHTML = `
            <div class="quiz-container">
                <h2>Quiz de Programación</h2>
                <p>Responde correctamente las preguntas para ganar puntos.</p>
                <div id="quiz-content"></div>
            </div>
        `;
        
        const quizContent = document.getElementById('quiz-content');
        let currentQuestion = 0;
        let score = 0;
        
        function showQuestion() {
            if (currentQuestion >= quizzes.length) {
                // Fin del quiz
                const pointsEarned = Math.floor(score / quizzes.length * 100);
                user.points += pointsEarned;
                user.xp += pointsEarned;
                checkLevelUp();
                updateUserProfile();
                
                quizContent.innerHTML = `
                    <h3>¡Quiz completado!</h3>
                    <p>Obtuviste ${score} de ${quizzes.length} respuestas correctas.</p>
                    <p>Ganaste ${pointsEarned} puntos.</p>
                    <button id="restart-quiz" class="quiz-next">Reiniciar Quiz</button>
                `;
                
                document.getElementById('restart-quiz').addEventListener('click', function() {
                    currentQuestion = 0;
                    score = 0;
                    showQuestion();
                });
                return;
            }
            
            const quiz = quizzes[currentQuestion];
            let optionsHTML = '';
            
            quiz.options.forEach((option, index) => {
                optionsHTML += `
                    <div class="quiz-option" data-index="${index}">
                        ${option}
                    </div>
                `;
            });
            
            quizContent.innerHTML = `
                <div class="quiz-question">${quiz.question}</div>
                <div class="quiz-options">${optionsHTML}</div>
                <div class="quiz-feedback"></div>
                <button class="quiz-next" disabled>Siguiente</button>
            `;
            
            const optionElements = document.querySelectorAll('.quiz-option');
            const feedbackElement = document.querySelector('.quiz-feedback');
            const nextButton = document.querySelector('.quiz-next');
            
            optionElements.forEach(option => {
                option.addEventListener('click', function() {
                    const selectedIndex = parseInt(this.getAttribute('data-index'));
                    const isCorrect = selectedIndex === quiz.correctIndex;
                    
                    // Deshabilitar todas las opciones
                    optionElements.forEach(opt => {
                        opt.style.pointerEvents = 'none';
                        if (parseInt(opt.getAttribute('data-index')) === quiz.correctIndex) {
                            opt.classList.add('correct');
                        }
                    });
                    
                    // Marcar la selección del usuario
                    if (!isCorrect) {
                        this.classList.add('incorrect');
                    }
                    
                    // Mostrar feedback
                    if (isCorrect) {
                        feedbackElement.textContent = '¡Correcto! ' + quiz.explanation;
                        feedbackElement.classList.add('correct');
                        score++;
                    } else {
                        feedbackElement.textContent = 'Incorrecto. ' + quiz.explanation;
                        feedbackElement.classList.add('incorrect');
                    }
                    
                    // Habilitar botón siguiente
                    nextButton.disabled = false;
                    
                    // Actualizar puntos
                    if (isCorrect) {
                        user.points += 10;
                        user.xp += 10;
                        checkLevelUp();
                        updateUserProfile();
                    }
                });
            });
            
            nextButton.addEventListener('click', function() {
                currentQuestion++;
                showQuestion();
            });
        }
        
        showQuestion();
    }
    
    // Cargar juego de sopa de letras
    function loadWordSearchGame() {
        gameContainer.innerHTML = `
            <div class="wordsearch-container">
                <h2>Sopa de Letras Tecno</h2>
                <p>Encuentra las palabras relacionadas con programación en la sopa de letras.</p>
                <div id="wordsearch-grid"></div>
                <div id="wordsearch-words" class="wordsearch-words"></div>
                <button id="new-wordsearch" class="quiz-next">Nueva Sopa de Letras</button>
            </div>
        `;
        
        createWordSearch();
        
        document.getElementById('new-wordsearch').addEventListener('click', createWordSearch);
    }
    
    // Cargar desafío de código
    function loadCodingChallenge() {
        const challenge = codingChallenges[Math.floor(Math.random() * codingChallenges.length)];
        
        gameContainer.innerHTML = `
            <div class="coding-container">
                <h2>Desafío de Código</h2>
                <p>Resuelve el siguiente problema de programación:</p>
                <div class="coding-problem">
                    <h3>${challenge.title}</h3>
                    <p>${challenge.description}</p>
                    <p><strong>Ejemplo:</strong> ${challenge.example}</p>
                </div>
                <textarea id="coding-editor" class="coding-editor" placeholder="Escribe tu solución aquí...">${challenge.startingCode || ''}</textarea>
                <div class="coding-controls">
                    <button id="coding-run" class="coding-button coding-run">Ejecutar</button>
                    <button id="coding-reset" class="coding-button coding-reset">Reiniciar</button>
                </div>
                <div id="coding-output" class="coding-output"></div>
                <div id="coding-test-result" class="coding-test-result"></div>
            </div>
        `;
        
        const editor = document.getElementById('coding-editor');
        const runButton = document.getElementById('coding-run');
        const resetButton = document.getElementById('coding-reset');
        const outputElement = document.getElementById('coding-output');
        const testResultElement = document.getElementById('coding-test-result');
        
        runButton.addEventListener('click', function() {
            outputElement.textContent = 'Ejecutando...';
            testResultElement.textContent = '';
            testResultElement.className = 'coding-test-result';
            
            try {
                // Capturar console.log
                const originalConsoleLog = console.log;
                let output = '';
                
                console.log = function(...args) {
                    output += args.join(' ') + '\n';
                    originalConsoleLog.apply(console, args);
                };
                
                // Ejecutar el código del usuario
                const userCode = editor.value;
                const fullCode = `${userCode}\n\n${challenge.testCode}`;
                
                // Usar Function para evitar problemas de scope
                new Function(fullCode)();
                
                // Restaurar console.log
                console.log = originalConsoleLog;
                
                // Mostrar output
                outputElement.textContent = output || 'No hay salida.';
                
                // Verificar si el test pasó (asumimos que el testCode establece una variable testPassed)
                if (typeof testPassed !== 'undefined' && testPassed) {
                    testResultElement.textContent = '¡Éxito! Tu solución es correcta.';
                    testResultElement.classList.add('success');
                    
                    // Otorgar puntos
                    const pointsEarned = 50;
                    user.points += pointsEarned;
                    user.xp += pointsEarned;
                    checkLevelUp();
                    updateUserProfile();
                } else if (typeof testPassed !== 'undefined') {
                    testResultElement.textContent = 'La solución no pasó todas las pruebas. Intenta de nuevo.';
                    testResultElement.classList.add('failure');
                }
            } catch (error) {
                outputElement.textContent = `Error: ${error.message}`;
                testResultElement.textContent = 'Hubo un error al ejecutar tu código.';
                testResultElement.classList.add('failure');
            }
        });
        
        resetButton.addEventListener('click', function() {
            editor.value = challenge.startingCode || '';
            outputElement.textContent = '';
            testResultElement.textContent = '';
            testResultElement.className = 'coding-test-result';
        });
    }
    
    // Verificar si el usuario subió de nivel
    function checkLevelUp() {
        if (user.xp >= user.xpToNextLevel) {
            user.level++;
            user.xp -= user.xpToNextLevel;
            user.xpToNextLevel = Math.floor(user.xpToNextLevel * 1.5);
            
            // Mostrar notificación de nivel
            const notification = document.createElement('div');
            notification.className = 'level-up-notification';
            notification.innerHTML = `
                <h3>¡Nivel ${user.level}!</h3>
                <p>Felicidades, has subido de nivel.</p>
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }
    }
    
    // Event listeners para los botones de juego
    gameOptions.forEach(option => {
        option.addEventListener('click', function() {
            const gameType = this.getAttribute('data-game');
            loadGame(gameType);
        });
    });
    
    // Inicializar perfil de usuario
    updateUserProfile();
    
    // Cargar un juego por defecto
    loadGame('quiz');
});