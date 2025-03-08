const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const diceFaces = ["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const min = 1;
const max = 6;

myButton.onclick = function() {
    let randomNum1 = Math.floor(Math.random() * max) + min;
    let randomNum2 = Math.floor(Math.random() * max) + min;
    let randomNum3 = Math.floor(Math.random() * max) + min;

    label1.textContent = diceFaces[randomNum1]; 
    label2.textContent = diceFaces[randomNum2];
    label3.textContent = diceFaces[randomNum3];
};
