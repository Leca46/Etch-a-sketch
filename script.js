let color = 'black';
let click = false

document.addEventListener("DOMContentLoaded", function(){
    createGrid(16)

    document.querySelector('body').addEventListener('click', function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector('#draw');
            if(click) {
                draw.innerHTML = 'Click to Start Drawing'
            } else {
                draw.innerHTML = 'No drawing for you'
            }
        }
    })

    let btnPop =  document.querySelector("#popup")
    btnPop.addEventListener('click', function(){
        let size = getSize()
        createGrid(size)
    })
})

function createGrid(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs;  i++) {
        let div  = document.createElement('div');
        div.addEventListener('mouseover', function(event) {
            colorDiv(event);
        });
        board.insertAdjacentElement( 'beforeend', div);
    }
}
function getSize(){
    let input = prompt('Input the size of the board');
    let message = document.querySelector("#message");
    if(message == null) {
        console.error("The element with the id of 'message' does not exist in the DOM");
    } else if(input == ""){
        message.innerHTML = "You didn't enter a number";
    } else if (input < 0 || input > 100) {
        message.innerHTML = "The number must be between 0 or 100"
    } else {
        message.innerHTML = 'Have Fun'
        return input
    }
}

function colorDiv(event){
    if(click) {
        if(color == 'random') {
            event.currentTarget.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            event.currentTarget.style.backgroundColor = 'black';
        }
    }
}

function setColor(colorChoise){
    color = colorChoise;

}

function resetBoard () {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = 'white');
}

