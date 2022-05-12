// Personal API Key for OpenWeatherMap API
const apiKey = 'c75a77c91fa5839ef784365c1c65c54c&units=imperial';
/* Global Variables */
const addDate = document.getElementById('date');
const temp = document.getElementById('temp');
const btn = document.getElementById('generate');
const content = document.getElementById('content');
const feel = document.getElementById('feelings');
const zip = document.getElementById('zip');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();


btn.addEventListener('click', () => {
    if (zip.value == "") {
        alert("please tipe zip");
    } else {
        content.innerHTML = `your feeling: ${ feel.value }`;
        addDate.innerHTML = `date is: ${ newDate }`;


        let Url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip.value}&appid=${apiKey}`;
        const postd = async(url = '', data = {}) => {
            await fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
        }
        async function tempfunc() {
            const res = await fetch(Url)
            try {
                const obj = await res.json()
                const temper = obj.main.temp
                postd('/recdata', { temper })
            } catch (error) {
                alert("zip code not found")
            }
        }
        tempfunc()



    }

})