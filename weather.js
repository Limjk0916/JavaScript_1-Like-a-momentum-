//위도와 경도 읽어오기
const weather = document.querySelector(".js-weather");
const API_KEY ="18d12228a7c51acdd58b1cb2379b34a3";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name
        weather.innerText =`${temperature}°C  /  ${place}동`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}



function handelGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('Cant access geo location');

}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handelGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const paresCoords = JSON.parse(loadedCoords);
        getWeather(paresCoords.latitude, paresCoords.longitude);
    }
}


function init(){
    loadCoords();
}

init();