//Factory
function urlBuilder(){}

// Object instances
let card = new CardManager(urlBuilder);
let board= new BoardManager("board", 58, card);

//Dom elements
let menu = document.getElementById('menu');
let select = document.getElementById('numCards');
let start = document.getElementById('start');
//Configuring the menu
for (let i = 4; i <= 10; i+=2) {//From 4 to 18
    let n = i*i;//Get i

    //Create a new option for the select
    let op = document.createElement('option');

    //Set both value and content to i
    op.value=n;
    op.innerHTML=n;

    //Add the new option to the page
    select.appendChild(op);
}
// Event listeners
start.addEventListener('click', ()=>{
    menu.classList.add('hidden');
    board.node.classList.remove('hidden');
    board.fill(select.value);
});

// Development code
start.click();

