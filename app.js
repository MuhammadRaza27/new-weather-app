function search() {
    let cityName = document.querySelector("#cityName").value;
    console.log(cityName);

    const API_KEY = '8b7ed970fd54ad39e73c0bca64db4732' 

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)

    .then(function (response) {

      // console.log(response.data);

    document.querySelector(".city").innerHTML = response.data.name;
    document.querySelector(".temp").innerHTML = Math.round (response.data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = response.data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round (response.data.wind.speed) + "km/h";
    
  


      })
      .catch(function (error) {
    document.querySelector("#result").innerHTML.cityName = "some thing went wrong"
      })
      
}

function currentDate(){

document.querySelector(".currentdate").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');

}

setInterval(currentDate, 1000);

// const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(currentDate)

// const element = document.querySelector('.my-text');

//     function bounceText() {
//         element.classList.remove('animate__heartBeat'); // pehle remove
//         void element.offsetWidth; // reflow force karega
//         element.classList.add('animate__animated', 'animate__heartBeat'); // phir add
//     }

//     // Her 1 second baad bounce karo
//     setInterval(bounceText, 1000);
