window.onload = function() {
    var board = document.getElementById("board")
    var box = board.querySelectorAll("div")
    for (var i = 0; i < box.length; i++){
        box[i].classList.add("square")
    }

    const squares = document.querySelectorAll(".square")
    let currentPlayer = "X"
    const gameBoard = Array(squares.length).fill(null);
    squares.forEach(function (square, index){
    square.addEventListener('click', () => {
        if (!gameBoard[index]) {
            gameBoard[index] = currentPlayer
            square.textContent = currentPlayer
            square.classList.add(currentPlayer)
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        }
        
    })
    
    squares.forEach(function (square) {
        square.addEventListener('mouseover', function () {
            square.classList.add('hover'); // Apply hover effect
        });

        square.addEventListener('mouseout', function () {
            square.classList.remove('hover'); // Remove hover effect
        });
    });
})
}



