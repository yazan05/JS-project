const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const userChoice = document.getElementById('userChoice');
const compChoice = document.getElementById('compChoice');
const result = document.getElementById('result');
const playAgin = document.getElementById('playAgin');
const userOption = document.querySelectorAll('.user-option');

const compChoiceArr = ['rock', 'scissors', 'paper'];

rock.addEventListener('click', () => {
    userChoice.textContent = 'rock';
    randomCompChoice();
    compare();
    disabledAction();
})
scissors.addEventListener('click', () => {
    userChoice.textContent = 'scissors';
    randomCompChoice();
    compare();
    disabledAction();
})
paper.addEventListener('click', () => {
    userChoice.textContent = 'paper';
    randomCompChoice();
    compare();
    disabledAction();
})

function disabledAction(){
    for(let i = 0; i < userOption.length; i++){
        userOption[i].style.pointerEvents = 'none';
        userOption[i].style.opacity = '0.5';
    }
}
function enabledAction(){
    for(let i = 0; i < userOption.length; i++){
        userOption[i].style.pointerEvents = 'all';
        userOption[i].style.opacity = '1';
        userChoice.textContent = 'User Choice!';
        compChoice.textContent = 'Computer Choice!';
    }
}

function randomCompChoice() {
    let index = Math.floor(Math.random() * compChoiceArr.length);
    compChoice.textContent = compChoiceArr[index];
}

function compare() {

    let compareResult = (userChoice.textContent == compChoice.textContent);
    if (compareResult) {
        result.textContent = 'tie';
    } else {
        if (userChoice.textContent == 'paper' && compChoice.textContent == 'rock') { result.textContent = 'user win' }
        else if (userChoice.textContent == 'rock' && compChoice.textContent == 'paper') { result.textContent = 'comp win' }
        else if (userChoice.textContent == 'scissors' && compChoice.textContent == 'paper') { result.textContent = 'user win' }
        else if (userChoice.textContent == 'paper' && compChoice.textContent == 'scissors') { result.textContent = 'comp win' }
        else if (userChoice.textContent == 'scissors' && compChoice.textContent == 'rock') { result.textContent = 'comp win' }
        else if (userChoice.textContent == 'rock' && compChoice.textContent == 'scissors') { result.textContent = 'user win' }
    }
}

playAgin.addEventListener('click', () => {
    enabledAction();
})