
let key = "0f58486ced331c0cf00d2dc54deff30c" ;

function display(data) {
    document.querySelector(".title-city").innerHTML = `Tempo em ${data.name}`
    document.querySelector(".temp").innerHTML = `${Math.floor(data.main.temp)}°C`
    //document.querySelector(".description").innerHTML = data.weather[0].description
    let description = data.weather[0].description;
    let capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
    document.querySelector(".description").innerHTML = capitalizedDescription;
    document.querySelector(".humidity").innerHTML = `Umidade: ${data.main.humidity}%`
    //document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    let iconElement = document.querySelector(".icon");
    iconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    iconElement.style.display = "block";
}

async function searchCity(city) {
    try {
        let data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
        ).then((response) => response.json());

        display(data)
        console.log(data);
    } catch (error) {
        document.querySelector(".title-city").innerHTML = "Cidade não encontrada!"
        document.querySelector(".temp").innerHTML = ""
        document.querySelector(".description").innerHTML = ""
        document.querySelector(".humidity").innerHTML = ""
        document.querySelector(".icon").style.display = "none"

    }
}

function handlerClick() {
    let city = document.querySelector(".input-city").value;

    searchCity(city);

    document.querySelector(".input-city").value = "";
}
