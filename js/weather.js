const API_KEY = "aee6795949dc039910bffa65dd1a76dc";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url).  //링크를 누를 필요 없이 js가 url을 부름
    then(Response => Response.json())  //then :  비동기 코드를 작성하는 데 사용되는 Promise의 메서드
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      weather.innerText = data.main.temp + "° @" + data.weather[0].main;
      city.innerText = data.name;
    });

}
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  //syntax유저의 위치를 얻음 (성공 시, 실패 시);
