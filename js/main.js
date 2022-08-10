//define variables
let numInput = document.getElementById('input');
let plusSign = document.getElementById('plus');
let minusSign = document.getElementById('minus');
let numResult = document.getElementById('result');


//shows 0 when opening up the browser
document.addEventListener('DOMContentLoaded', () => {
    numResult.innerText = 0;
})

//plus function
//when the plus button is clicked, the value inputted is added to the counter resulting a new value
plusSign.addEventListener('click', () => {
    let numResultPlus = Number(numResult.innerText) + Number(numInput.value);
    numResult.innerText = numResultPlus
//bonus: negative value is red
    if (numResultPlus < 0) {
        numResult.style.color = 'red'
    } else {
        numResult.style.color = 'black'
    }
});

//minus function
//when the minus button is clicked, the value inputted is subtracted to the counter resulting a new value
minusSign.addEventListener('click', () => {
   let numResultMinus = numResult.innerText - numInput.value;
   numResult.innerText = numResultMinus
//bonus: negative value is red
   if (numResultMinus < 0) {
    numResult.style.color = 'red'
   } else {
    numResult.style.color = 'black'
   }
});
