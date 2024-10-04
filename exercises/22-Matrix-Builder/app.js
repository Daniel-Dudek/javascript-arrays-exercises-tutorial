// Your code here
function matrixBuilder(n) {
    let matrix = [];

    for(let i = 0; i < n; i++) {
        let row = [];

        for(let j = 0; j < n; j++) {
            let randomNumber = Math.floor(Math.random() * 2);
            row.push(randomNumber);
        }
        matrix.push(row);
    }
    return matrix
}

// Do not change anything from this line down
console.log(matrixBuilder(5))
