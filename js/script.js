
function getMoveName(argMoveId) {
    console.log('Wywołano funkcję getMoveName z argumentem:' + argMoveId);
    if(argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3 ) {
      return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('Wywołanie funkcji displayResult');
    console.log ('argumenty: ' + argPlayerMove + ',' + argComputerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argPlayerMove == 'papier' && argComputerMove == 'kamień'){
        printMessage('Ty wygrywasz');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
        printMessage('Ty wygrywasz');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
        printMessage('Ty wygrywasz');
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis');
    } else {
        printMessage ('Przegrywasz...');
    }
} 

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
let playerMove = getMoveName(randomNumber);

displayResult(playerMove, computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);



/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nożyce';
}*/


/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove ='papier';
} else if(playerInput =='3'){
    playerMove='nożyce';
}*/


/*if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else if(computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrywasz...');
} else if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis');

} else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
} else if(computerMove == 'papier' && playerMove =='kamień'){
    printMessage('Ty przegrywasz...');
} else if(computerMove == 'papier' && playerMove =='papier'){
    printMessage('Remis');

} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegrywasz...');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis');
} else {
    printMessage('Wprowadzono błędną liczbę!');
}*/




