const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const gameBoard = $('.game-board')
const player = []
const computer = []

function renderGameBoard() {
    let htmls = ''
    for (let i = 1; i<=3; i++) {
        htmls += `<div class="row">`
        for (let j = 1; j<=3; j++) {
            htmls += `
                <div class="block" data-row="${i}" data-col="${j}">
        
                </div>
            `
        }
        htmls += `</div>`
    }
    return gameBoard.innerHTML = htmls
}

function checkWin() {

}

renderGameBoard()