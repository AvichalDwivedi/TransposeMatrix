document.getElementById('generateMatrix').addEventListener('click', generateMatrix);
document.getElementById('calculateTranspose').addEventListener('click', calculateTranspose);

function generateMatrix() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const matrixForm = document.getElementById('matrixForm');
    matrixForm.innerHTML = ''; // Clear previous form
    
    if (rows > 0 && cols > 0) {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                matrixForm.innerHTML += `<input type="number" name="cell" data-row="${i}" data-col="${j}" required> `;
            }
            matrixForm.innerHTML += '<br>';
        }
    } else {
        alert('Please enter valid row and column numbers.');
    }
}

function calculateTranspose() {
    const inputs = document.querySelectorAll('#matrixForm input[name="cell"]');
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const matrix = [];
    
    // Create matrix from inputs
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            const input = inputs[i * cols + j];
            matrix[i][j] = parseInt(input.value);
        }
    }

    // Transpose the matrix
    const transposedMatrix = [];
    for (let i = 0; i < cols; i++) {
        transposedMatrix[i] = [];
        for (let j = 0; j < rows; j++) {
            transposedMatrix[i][j] = matrix[j][i];
        }
    }

    // Display the transposed matrix
    displayTransposedMatrix(transposedMatrix);
}

function displayTransposedMatrix(matrix) {
    const transposedMatrixDiv = document.getElementById('transposedMatrix');
    transposedMatrixDiv.innerHTML = ''; // Clear previous result
    matrix.forEach(row => {
        row.forEach(value => {
            transposedMatrixDiv.innerHTML += `<span>${value}</span> `;
        });
        transposedMatrixDiv.innerHTML += '<br>';
    });
}
