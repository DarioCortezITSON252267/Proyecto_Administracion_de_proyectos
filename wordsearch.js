// Términos de programación para la sopa de letras
const programmingTerms = [
    "VARIABLE", "FUNCION", "OBJETO", "CLASE", "METODO",
    "ARREGLO", "BUCLE", "CONDICION", "HERENCIA", "POLIMORFISMO",
    "ENCAPSULAMIENTO", "INTERFAZ", "ALGORITMO", "COMPILADOR", "INTERPRETE",
    "DEPURADOR", "GIT", "HTML", "CSS", "JAVASCRIPT"
];

// Configuración de la sopa de letras
const wordSearchConfig = {
    gridSize: 15,
    directions: [
        { dr: 1, dc: 0 },   // Vertical hacia abajo
        { dr: 0, dc: 1 },   // Horizontal hacia derecha
        { dr: 1, dc: 1 },   // Diagonal hacia abajo-derecha
        { dr: 1, dc: -1 }   // Diagonal hacia abajo-izquierda
    ]
};

// Crear una nueva sopa de letras
function createWordSearch() {
    const grid = initializeGrid(wordSearchConfig.gridSize);
    const selectedWords = selectRandomWords(programmingTerms, 10);
    const placedWords = placeWords(grid, selectedWords);
    fillEmptyCells(grid);
    displayWordSearch(grid, placedWords);
}

// Inicializar una cuadrícula vacía
function initializeGrid(size) {
    const grid = [];
    for (let i = 0; i < size; i++) {
        grid[i] = [];
        for (let j = 0; j < size; j++) {
            grid[i][j] = '';
        }
    }
    return grid;
}

// Seleccionar palabras aleatorias del conjunto
function selectRandomWords(words, count) {
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Colocar palabras en la cuadrícula
function placeWords(grid, words) {
    const size = grid.length;
    const placedWords = [];
    
    words.forEach(word => {
        let placed = false;
        let attempts = 0;
        const maxAttempts = 50;
        
        while (!placed && attempts < maxAttempts) {
            attempts++;
            
            // Elegir dirección aleatoria
            const direction = wordSearchConfig.directions[
                Math.floor(Math.random() * wordSearchConfig.directions.length)
            ];
            
            // Elegir posición inicial aleatoria
            const startRow = Math.floor(Math.random() * size);
            const startCol = Math.floor(Math.random() * size);
            
            // Calcular posición final
            const endRow = startRow + direction.dr * (word.length - 1);
            const endCol = startCol + direction.dc * (word.length - 1);
            
            // Verificar si cabe en la cuadrícula
            if (endRow < 0 || endRow >= size || endCol < 0 || endCol >= size) {
                continue;
            }
            
            // Verificar que no haya conflictos con letras existentes
            let canPlace = true;
            for (let i = 0; i < word.length; i++) {
                const row = startRow + i * direction.dr;
                const col = startCol + i * direction.dc;
                const currentChar = grid[row][col];
                
                if (currentChar !== '' && currentChar !== word[i]) {
                    canPlace = false;
                    break;
                }
            }
            
            // Colocar la palabra si es posible
            if (canPlace) {
                for (let i = 0; i < word.length; i++) {
                    const row = startRow + i * direction.dr;
                    const col = startCol + i * direction.dc;
                    grid[row][col] = word[i];
                }
                
                placedWords.push({
                    word: word,
                    startRow: startRow,
                    startCol: startCol,
                    endRow: endRow,
                    endCol: endCol,
                    found: false
                });
                
                placed = true;
            }
        }
    });
    
    return placedWords;
}

// Rellenar celdas vacías con letras aleatorias
function fillEmptyCells(grid) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '') {
                grid[i][j] = letters.charAt(Math.floor(Math.random() * letters.length));
            }
        }
    }
}

// Mostrar la sopa de letras en el DOM
function displayWordSearch(grid, words) {
    const gridElement = document.getElementById('wordsearch-grid');
    const wordsElement = document.getElementById('wordsearch-words');
    
    // Crear tabla para la cuadrícula
    const table = document.createElement('table');
    table.className = 'wordsearch-grid';
    
    for (let i = 0; i < grid.length; i++) {
        const row = document.createElement('tr');
        
        for (let j = 0; j < grid[i].length; j++) {
            const cell = document.createElement('td');
            cell.className = 'wordsearch-cell';
            cell.textContent = grid[i][j];
            cell.setAttribute('data-row', i);
            cell.setAttribute('data-col', j);
            row.appendChild(cell);
        }
        
        table.appendChild(row);
    }
    
    // Mostrar lista de palabras a encontrar
    wordsElement.innerHTML = '';
    words.forEach(wordObj => {
        const wordElement = document.createElement('div');
        wordElement.className = 'wordsearch-word';
        wordElement.textContent = wordObj.word;
        wordElement.setAttribute('data-word', wordObj.word);
        wordsElement.appendChild(wordElement);
    });
    
    gridElement.innerHTML = '';
    gridElement.appendChild(table);
    
    // Lógica para seleccionar palabras
    let selectedCells = [];
    let isMouseDown = false;
    
    table.addEventListener('mousedown', function(e) {
        if (e.target.classList.contains('wordsearch-cell')) {
            isMouseDown = true;
            selectedCells = [e.target];
            e.target.classList.add('selected');
        }
    });
    
    table.addEventListener('mouseover', function(e) {
        if (isMouseDown && e.target.classList.contains('wordsearch-cell')) {
            const lastCell = selectedCells[selectedCells.length - 1];
            const currentCell = e.target;
            
            // Verificar si la celda actual es adyacente a la última seleccionada
            const lastRow = parseInt(lastCell.getAttribute('data-row'));
            const lastCol = parseInt(lastCell.getAttribute('data-col'));
            const currentRow = parseInt(currentCell.getAttribute('data-row'));
            const currentCol = parseInt(currentCell.getAttribute('data-col'));
            
            const rowDiff = currentRow - lastRow;
            const colDiff = currentCol - lastCol;
            
            // Solo permitir selección en línea recta (horizontal, vertical o diagonal)
            if (condition) {
                
            }
            if (selectedCells.length === 1 || 
                (Math.sign(rowDiff) === Math.sign(selectedCells[1].rowDiff) && 
                Math.sign(colDiff) === Math.sign(selectedCells[1].colDiff) &&
                (rowDiff === 0 || colDiff === 0 || Math.abs(rowDiff) === Math.abs(colDiff))) {
                
                // Marcar todas las celdas hasta la actual
                const directionRow = rowDiff === 0 ? 0 : rowDiff / Math.abs(rowDiff);
                const directionCol = colDiff === 0 ? 0 : colDiff / Math.abs(colDiff);
                
                // Limpiar selección anterior
                document.querySelectorAll('.wordsearch-cell.selected').forEach(cell => {
                    if (!selectedCells.includes(cell)) {
                        cell.classList.remove('selected');
                    }
                });
                
                // Agregar nuevas celdas seleccionadas
                selectedCells = [selectedCells[0]];
                let r = lastRow;
                let c = lastCol;
                
                while (r !== currentRow || c !== currentCol) {
                    r += directionRow;
                    c += directionCol;
                    const cell = table.querySelector(`.wordsearch-cell[data-row="${r}"][data-col="${c}"]`);
                    if (cell) {
                        cell.classList.add('selected');
                        selectedCells.push(cell);
                    }
                }
                
                // Agregar la celda actual si no está ya en la lista
                if (!selectedCells.includes(currentCell)) {
                    currentCell.classList.add('selected');
                    selectedCells.push(currentCell);
                }
            }
        }
    });
    
    document.addEventListener('mouseup', function() {
        isMouseDown = false;
        
        // Verificar si la selección coincide con alguna palabra
        if (selectedCells.length > 1) {
            const selectedWord = selectedCells.map(cell => cell.textContent).join('');
            
            for (const wordObj of words) {
                if (wordObj.word === selectedWord && !wordObj.found) {
                    // Marcar palabra como encontrada
                    wordObj.found = true;
                    
                    // Marcar celdas como encontradas
                    selectedCells.forEach(cell => {
                        cell.classList.remove('selected');
                        cell.classList.add('found');
                    });
                    
                    // Marcar palabra en la lista
                    const wordElement = wordsElement.querySelector(`[data-word="${wordObj.word}"]`);
                    if (wordElement) {
                        wordElement.classList.add('found');
                    }
                    
                    // Otorgar puntos
                    const pointsEarned = wordObj.word.length * 5;
                    user.points += pointsEarned;
                    user.xp += pointsEarned;
                    checkLevelUp();
                    updateUserProfile();
                    
                    // Verificar si todas las palabras fueron encontradas
                    if (words.every(w => w.found)) {
                        setTimeout(() => {
                            alert('¡Felicidades! Has encontrado todas las palabras.');
                        }, 500);
                    }
                    
                    break;
                }
            }
        }
        
        // Limpiar selección
        selectedCells.forEach(cell => {
            if (!cell.classList.contains('found')) {
                cell.classList.remove('selected');
            }
        });
        selectedCells = [];
    });
}