/* Global Variables */
const apikey = 'e19f8abe3b8a919104ca11ba00ed4649&units=imperial';

const submitButton = document.getElementById('generate');

submitButton.addEventListener('click',async () =>{
    try{
        let zipCode = document.getElementById('zip').value;
        let feelings = document.getElementById('feelings').value;

        const apiURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apikey}`;

        const response = await fetch(apiURL).then(res => res.json());
        const temp = await response.main.temp;

        // Create a new date instance dynamically with JS
        let d = new Date();
        let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();

        const saveData = await fetch('/postURL', {
            method: 'POST', 
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json',},

           // Body data type must match "Content-Type" header
            body: JSON.stringify({ newDate:newDate, temp:temp, feelings:feelings})
          })

        const getData = await fetch('/getURL').then(res => res.json());
        document.getElementById('date').innerHTML = `DATE: ${getData.date}`;
        document.getElementById('temp').innerHTML = `TEMPERATURE: ${getData.temp}`;
        document.getElementById('content').innerHTML =`YOUR FEELING: ${getData.feelings}`;        
    }
    catch(error){
        console.log('Error',error);
    }
    
})
