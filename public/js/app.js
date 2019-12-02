

console.log('app is loading...!!!');

const weatherform = document.querySelector('form');
const search = document.querySelector('input')
const content = document.querySelector('#message2');
const errormsg = document.querySelector('#message1');
const interactiveMsg = document.querySelector('#suggest');


weatherform.addEventListener('submit', (e) => {
  e.preventDefault();



  console.log('testing');
  console.log(search.value);
  fetch('/weather?location=' + search.value + '').then((response) => {

    response.json().then((data) => {
      if (data.error) {
        errormsg.textContent = data.error;
      }
      else {
        const temp = Math.floor(data.temperature)
        content.textContent = "Current temperature:" + temp + " degrees";

        if (temp < 20) {
          interactiveMsg.textContent = "weather is cool at this time! "

          console.log('coooool weather');
          document.body.style.backgroundImage = "url('img/cold-weather.jpg')";

          document.getElementById("suggest").style.color = "red";
          // document.body.style.backgroundColor = "#f3f3f3";

          //  document.body.style.background = "url('C:\Users\Kalyan Chakravarthi\Desktop\node-weather-master\public\img\sunnyday.png')";
          //          document.getElementById("body").style.backgroundImage = "url('C:\Users\Kalyan Chakravarthi\Desktop\node-weather-master\public\img\sunnyday.png')"
        }
        else if (temp < 30 && temp > 20) {
          interactiveMsg.textContent = "Temperature is moderate.."
          document.body.style.backgroundImage = "url('img/sunnyday.jpg')";
        }
        else {
          interactiveMsg.textContent = "Its super hot outside"

        }

        // content.textContent = data.temperature;
        // content.textContent = data.rainProb;
      }
    })
  })
})