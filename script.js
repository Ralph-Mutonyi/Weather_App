// Define the apikey and apiurl variables using const keyword
const apikey = "";
const apiurl = "";

// Define list of variables to hold values for our elements

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

searchButton.addEventListener("click", () => { // imediately invoked function
    const location = locationInput.value;
    // condition to check if user entered location
    if(location){
        fetchWeather(location);
    }else{
        alert("please enter a location");
    }
});

function fetchWeather(location){
    const url = `${apiurl}?q=${location}&appid=${apikey}&units=metric`; // (?) --> denotes begining of query parameters. 

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch((error) => {
            console.error("Error fetching weather data: ", error);
        });
};