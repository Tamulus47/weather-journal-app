/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
const addDate = document.getElementById('date');
const btn = document.getElementById('generate');
const content = document.getElementById('content');
const feel = document.getElementById('feelings');
const zip = document.getElementById('zip');



btn.addEventListener('click', () => {
    if (zip.value == "") {
        alert("please tipe zip");
    } else {
        content.innerHTML = `your feeling: ${feel.value}`;
        addDate.innerHTML = `date is: ${newDate}`;
    }
})