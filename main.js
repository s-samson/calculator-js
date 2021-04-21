
// theme change
let headerButton = document.querySelector('body');
let myButtons = document.querySelector('.themeToggle');

function changeBackground(){
    headerButton.classList.toggle ('bg_dark');
}


// rekenmachine
let display='0';
let operator=null;
let firstValue= 0;
let secondValue= 0;
let result= 0;

let displayElement=document.querySelector('.display');
let buttonsElement=document.querySelector('.buttons');

buttonsElement.addEventListener('click', handleClick);
showDisplay();

// hier kijkt de machine welke event de gebruiker kiest, en roept hij een functie aan.
function handleClick(event)
{
    const element=event.target;

    switch(element.className)
    {
        case 'btn-number':
            handleNumber(element);
            break;
        case 'btn-operator':
            handleOperator(element);
            break;
        case 'btn-equal':
            handleEqual(element);
            break;
        case 'btn-clear':
            handleClear(element);
            break;
        case 'btn-dot':
            handleDot(element);
            break;
    }
}
//  Hier voert hij de nummers in.
function handleNumber(el)
{
    let number=el.innerHTML;

    if(display==='0'){
        display=number;
    }
    else{
        display=display+number;
    }

    showDisplay();
} 
//  Hier handelt de machine de operater die de gebruiker kiest.
function handleOperator(el) {
    firstValue = display;
    display = "0";
    operator=el.innerHTML;
    showDisplay();
}

// Hier Berekent de calculator de Operators & convert de string naar getallen.
function handleEqual () {
    secondValue=display;
    display = "0";
    let one = parseFloat(firstValue);
    let two = parseFloat(secondValue);
    if (operator === "+") {
        result = one+two;
    }else if(operator === "-") {
        result = one-two;
    }else if(operator === "*") {
        result = one*two;
    }else if(operator === "/") {
        result = one/two;
    }
    display=result;
    showDisplay();

}
// Dit is de functie waarbij je maar 1 dot mag zetten per berekening.
function handleDot(el){
    let dot = el.innerHTML;
    if(!display.includes(".")){
        display=display+dot;
    }
    showDisplay();
}

// hier cleart hij de calculator
function handleClear (el) {
    display='0';
    operator= null;
    firstValue= 0;
    secondValue= 0;
    result= 0;
    displayElement.innerHTML = 0;
    showDisplay;
}
// dit is de functie om de display te showen
function showDisplay(){
    displayElement.innerHTML=display;
}