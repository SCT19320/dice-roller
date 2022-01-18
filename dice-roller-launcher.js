var lastRollNumber;

function diceRoller(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    var pngSelector = './Assets/dice' + diceNumber + '.png';
    document.querySelectorAll('img')[0].setAttribute('src', pngSelector);
    lastRollNumber = diceNumber;
}