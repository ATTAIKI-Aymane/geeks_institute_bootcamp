// ===== Game Variables ==========================================================

let board = ["","","","","","","","",""]
let player = ""
let computer = ""
let level = "easy"
let gameOver = false

const winCombos = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[6,4,2]
]

// ===== Select Player ===========================================================

function setPlayer(symbol){
player = symbol
computer = symbol === "X" ? "O" : "X"
}

// ===== Select Level ============================================================

function setLevel(lvl){
level = lvl
}

// ===== Player Move =============================================================

document.querySelectorAll(".cell").forEach(cell=>{
cell.addEventListener("click", playerMove)
})

function playerMove(e){

if(gameOver) return

let index = e.target.id

if(board[index] !== "") return

board[index] = player
e.target.textContent = player

checkGame()

if(!gameOver){
computerMove()
}

}

// ===== Computer Move ===========================================================

function computerMove(){

let move

if(level === "easy"){
let empty = board.map((v,i)=> v === "" ? i : null).filter(v=> v !== null)
move = empty[Math.floor(Math.random()*empty.length)]
}

else{
move = bestMove()
}

board[move] = computer
document.getElementById(move).textContent = computer

checkGame()

}

// ===== Hard Level AI ===========================================================

function bestMove(){

for(let combo of winCombos){
let [a,b,c] = combo

let line = [board[a],board[b],board[c]]

if(line.filter(v=>v===player).length === 2 && line.includes("")){
return combo[line.indexOf("")]
}
}

let empty = board.map((v,i)=> v === "" ? i : null).filter(v=> v !== null)

return empty[Math.floor(Math.random()*empty.length)]

}

// ===== Check Winner ============================================================

function checkGame(){

for(let combo of winCombos){

let [a,b,c] = combo

if(board[a] && board[a] === board[b] && board[a] === board[c]){

document.getElementById("result").textContent = board[a] + " Wins!"
gameOver = true
return
}

}

if(!board.includes("")){
document.getElementById("result").textContent = "Tie Game"
gameOver = true
}

}

// ===== Restart Game ============================================================

function restartGame(){

board = ["","","","","","","","",""]
gameOver = false

document.querySelectorAll(".cell").forEach(cell=>{
cell.textContent = ""
})

document.getElementById("result").textContent = ""

}