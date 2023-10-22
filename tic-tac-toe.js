window.onload = function() {
    var board = document.getElementById("board")
    var box = board.querySelectorAll("div")
    for (var i = 0; i < box.length; i++){
        box[i].classList.add("square")
    }

    const squares = document.querySelectorAll(".square")
    let currentPlayer = "X"
    const status = document.getElementById('status');
    const gameBoard = Array(9).fill(null);
    squares.forEach(function (square, index){
        square.addEventListener('click', () => {
            if (!gameBoard[index]) {
                gameBoard[index] = currentPlayer
                square.textContent = currentPlayer
                square.classList.add(currentPlayer)
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
            }
            if (checkWin(gameBoard, currentPlayer)) {
                status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                status.classList.add('you-won');
                console.log("You win");
            }


            
        })

        squares.forEach(function (square) {
            square.addEventListener('mouseover', function () {
                square.classList.add('hover');
            });

            square.addEventListener('mouseout', function () {
                square.classList.remove('hover');
            });
        });

        
    })
    function checkWin(board, player) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        // Check each win pattern
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] === player && board[b] === player && board[c] === player) {
                return true; // Player has won
            }
        }

        return false;
    }

    let restart = document.querySelector('.btn')
    restart.addEventListener('click', function () {
        squares.forEach(function (square, index) {
            square.textContent = ''
            square.classList.remove('X', 'O')
            gameBoard[index] = null
        });

        status.textContent = 'Move your mouse over a square and click to play an X or an O.'
        status.classList.remove('you-won')
        currentPlayer = 'X'
    });
}



