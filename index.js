let board = ["","","","","","","","",""];
let player = "X";
let gameOver = false;

let winPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

function play(cell,index){

if(board[index] != "" || gameOver)
return;

board[index] = player;
cell.innerText = player;

checkWinner();

player = player == "X" ? "O" : "X";
}

function checkWinner(){

for(let pattern of winPatterns){

let a = board[pattern[0]];
let b = board[pattern[1]];
let c = board[pattern[2]];

if(a != "" && a == b && b == c){

document.getElementById("status").innerText = a + " Wins!";
gameOver = true;
return;

}
}

if(!board.includes("")){
document.getElementById("status").innerText = "Draw!";
gameOver = true;
}

}

function restart(){

board = ["","","","","","","","",""];
player = "X";
gameOver = false;

document.querySelectorAll(".cell").forEach(cell=>{
cell.innerText = "";
});

document.getElementById("status").innerText = "";

}