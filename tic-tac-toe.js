window.onload = function() {
    var board = document.getElementById("board")
    var box = board.querySelectorAll("div")
    for (var i = 0; i < box.length; i++){
        box[i].classList.add("square")
    }
    
}