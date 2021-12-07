
    
function playGame(playerInput){
    console.log('Wywołano funkcję playGame ' + playerInput);
    clearMessages();

    function getMoveName(argMoveId){ 
        console.log('Wywołano funkcję getMoveName z argumentem:' + argMoveId);
        if(argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3 ) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('Wywołano funkcję displayResult z argumentami: ' + argPlayerMove +', ' + argComputerMove);
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if (argPlayerMove == 'papier' && argComputerMove == 'kamień'){
            printMessage('Wygrywasz');
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
            printMessage('Wygrywasz');
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
            printMessage('Wygrywasz');
        } else if (argPlayerMove == argComputerMove){
            printMessage('Remis');
        } else {
            printMessage ('Przegrywasz...');
        }
    } 

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    let playerMove = playerInput;
    
    
    displayResult(computerMove, playerMove);
    
}

let buttonRock = document.getElementById('play-rock');
buttonRock.addEventListener('click', function(){
    playGame('kamień');
});
let buttonPaper = document.getElementById('play-paper');
buttonPaper.addEventListener('click', function(){
    playGame('papier');
});
let buttonScissors = document.getElementById('play-scissors');
buttonScissors.addEventListener('click', function (){
    playGame('nożyce');
});








