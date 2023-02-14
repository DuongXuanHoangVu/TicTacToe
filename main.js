const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

const gameBoard = $('.game-board')
const resetBtn = $('.reset-btn')
const startBtn = $('.start-btn')
const messBlock= $('.winning-mess')
const blocks = document.getElementsByClassName('block')
let blockArr = []
let player = []
let computer = []
let mess = ''
let playerRound = true

function playerGame(e) {
    e.textContent = 'X'
    player.push(parseInt(e.id))
    if (checkWin(player)) {
        mess = 'You won'
        messBlock.textContent = mess
        playerRound = false
        return false
    }
    if ((player.length + computer.length) < 9) {
        setTimeout(()=> {computerGame()}, 1000)
    } else {
        if (checkWin(player)) {
            mess = 'You won'          
            messBlock.textContent = mess
            playerRound = false
            return false
        } else if (checkWin(player) === false && checkWin(computer) === false) {
            messBlock.textContent = 'Hòa'
        } 
    }
    return playerRound = false
}

function computerGame() {
    if (playerRound === false) {
        if (checkWin(computer)) {
            mess = 'Bạn thua'
            messBlock.textContent = mess
            return false
        } 
        let numRand = Math.floor(Math.random()*8)
        while (player.includes(numRand) == true || computer.includes(numRand)) {
            numRand = Math.floor(Math.random()*8)
        }
        blocks[numRand].textContent = 'O'
        computer.push(numRand)
        if (checkWin(computer)) {
            mess = 'Bạn thua'
            messBlock.textContent = mess
            return false
        } else {
            return playerRound = true
        }
    }
    return playerRound = true
}

function checkWin(arr) {
    return WINNING_COMBINATIONS.some((combination) => {
        return combination.every(element => {
            return arr.includes(element)
        })
    })
}

function resetGame(){
    for (let value of blocks) {
        value.textContent = ''
    }
    messBlock.textContent = ''
    player = []
    computer = []
    playerRound = true
}

function start() {
    for (let value of blocks) {
        value.onclick = () => {
            if (playerRound && value.textContent === '') {
                playerGame(value)
            }
        }
    }
}

start()

resetBtn.onclick = ()=>{
    resetGame()
} 

