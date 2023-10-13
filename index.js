const apiKey="3dce96cf47e4c12af1b9fbfb422a2898";
const apiURl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const images=document.querySelector(".whetherimage");
async function checkwhether(city){
    const response=await fetch(apiURl +city+ `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".whether").style.display="none";
    }
    else{
        var data=await response.json();
    

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=data.main.temp+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
        
        if(data.weather[0].main=="Clouds"){
            images.src="cloud.png";
        }
        else if(data.weather[0].main=="Clear"){
            images.src="clear.png";
        }
       else if(data.weather[0].main=="Rain"){
            images.src="rain.png";
        }
       else if(data.weather[0].main=="Haze"){
            images.src="haze.png";
        }
       else if(data.weather[0].main=="Drizzle"){
            images.src="driz.png";
        }
        document.querySelector(".whether").style.display="block";
        document.querySelector(".error").style.display="none";
    }
    var data=await response.json();
    

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
    
    if(data.weather[0].main=="Clouds"){
        images.src="cloud.png";
    }
    else if(data.weather[0].main=="Clear"){
        images.src="clear.png";
    }
   else if(data.weather[0].main=="Rain"){
        images.src="rain.png";
    }
   else if(data.weather[0].main=="Haze"){
        images.src="haze.png";
    }
   else if(data.weather[0].main=="Drizzle"){
        images.src="driz.png";
    }
    document.querySelector(".whether").style.display="block";
    document.querySelector(".error").style.display="none";

    
}

searchBtn.addEventListener("click",()=>{
    checkwhether(searchBox.value);
})


