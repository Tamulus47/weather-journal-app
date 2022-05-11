/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
const addDate = document.getElementById('date');
const btn = document.getElementById('generate');
const content = document.getElementById('content');
let feel = document.getElementById('feelings');


btn.addEventListener('click', () => {
    content.innerHTML = `you feeling: ${feel.value}`;
    addDate.innerHTML = `date is: ${newDate}`;
})