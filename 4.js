function diagonalDifference(matrix) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - i - 1];
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(diagonalDifference(matrix)); 
// Output: 3
