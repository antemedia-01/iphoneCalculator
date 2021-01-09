let display = document.querySelector('.value')

let Ac = document.querySelector('.ac');
let number_7 = document.querySelector('.number-7');
let number_8 = document.querySelector('.number-8');
let number_9 = document.querySelector('.number-9');
let number_1 = document.querySelector('.number-1');
let number_2 = document.querySelector('.number-2');
let number_3 = document.querySelector('.number-3');
let number_4 = document.querySelector('.number-4');
let number_5 = document.querySelector('.number-5');
let number_6 = document.querySelector('.number-6');
let number_7 = document.querySelector('.number-7');
let number_0 = document.querySelector('.number-0');

let equal = document.querySelector('.equal');
let add = document.querySelector('.addition');
let sub = document.querySelector('.subtraction');
let mul = document.querySelector('.multiplication');
let div = document.querySelector('.division');





Ac.addEventListener('click', () => {
    console.log(Ac.value);
    display.textContent = " ";
});

number_7.addEventListener('click', () => {
    console.log(7);
    if (display.textContent == 0) {
        display.textContent = `${number_7.textContent}`;
    } else {
        display.textContent = `${display.textContent}${number_7.textContent}`;
    }
});

number_8.addEventListener('click', () => {
    console.log(7);
    if (display.textContent == 0) {
        display.textContent = `${number_8.textContent}`;
    } else {
        display.textContent = `${display.textContent}${number_8.textContent}`;
    }
});

number_9.addEventListener('click', () => {
    console.log(7);
    if (display.textContent == 0) {
        display.textContent = `${number_9.textContent}`;
    } else {
        display.textContent = `${display.textContent}${number_9.textContent}`;
    }
});

add.addEventListener('click', () => {
    console.log('+');
    display.textContent = `${display.textContent}+`;
});

equal.addEventListener('click', () => {
    let result = eval(display.textContent);
    console.log(result);
    display.textContent = result;
});