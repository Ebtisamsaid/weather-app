
// api key= c2a8b3edad91481b914113640240107
   
// base url =http://api.weatherapi.com/v1/forecast.json

let searchInput=document.querySelector('#searchInput');
let findBtn=document.querySelector('#findBtn');
async function getWeather(country){
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c2a8b3edad91481b914113640240107&q=${country}&days=3`);
     
        let finalResponse = await response.json()
        console.log(finalResponse);
  diplayWeatherDay(finalResponse)

        
        
    } catch (error) {
       console.log(error); 
    }
}
getWeather()

function getCurrentPosition(position){
    console.log(position);
   let latitude = position.coords.latitude ;
   let longitude = position.coords.longitude ;
   let myCurrentposition =`${latitude},${longitude}`
   getWeather(myCurrentposition)
}
navigator.geolocation.getCurrentPosition(getCurrentPosition)



findBtn.addEventListener('submit',function() 
{
getWeather(searchInput.value)
})

searchInput.addEventListener('change',function(){
    getWeather(searchInput.value)
})

// function searchInputdata(searchData){
//  let searchDataArray= searchData.location.name
//  console.log(searchDataArray);
// }


 function diplayWeatherDay(data){
    const DataArray=data.forecast.forecastday


    console.log(DataArray);
   let weatherBox='';

       for (let i = 0; i < DataArray.length; i++) {
const date = new Date(DataArray[i].date)
const weekDay = date.toLocaleDateString("en-uk" ,{weekday:'long'})
     weatherBox +=`
     
      <div class="col-md-4">
            <div class="card  mb-3 text-white" style="max-width: 30em; background-color: #2D303D;">
                <div class="card-header d-flex justify-content-between"><p>${weekDay}</p> </div>
                <div class="card-body" style="background-color: #323544;">
                  <h5 class="card-title">${data.location.name}</h5>
                 <div class=" text-center mt-2 m-auto" style="width:fit-content;">
               
                  <p class="card-text fw-bold ms-3 d-block" style="font-size:60px;" >  ${DataArray[i].day.maxtemp_c}<sup>o</sup>C</p>
                 </div>

                     <div class=" text-center mt-2 m-auto" style="width:fit-content;">
               
                  <p class="card-text fw-bold ms-3 d-block" style="font-size:30px;" >  ${DataArray[i].day.mintemp_c}<sup>o</sup>C</p>
                 
                   <img src="https:${DataArray[i].day.condition.icon}"  ></img>
                    <p class="mt-3 mx-2 " style="color: blue;">${DataArray[i].day.condition.text}</p>
                  </div>

                
               
                <div class="d-flex justify-content-between ">
                    <i class="fa-solid fa-umbrella" style="color: #bfc1c8; line-height:1.5;" > <span style="font-size: 14px; color: #bfc1c8;"> ${DataArray[i].day.daily_chance_of_rain
                    }</span></i>
                    <i  class="fa-solid fa-wind mx-3" style=" line-height:1.5; color:  #bfc1c8;"> <span style="font-size: 14px; color: #bfc1c8;"> ${DataArray[i].day.maxwind_kph} km/h</span></i>
                    
                </div>
                </div>
        </div>
    </div>
     
     `
        
       }
       document.querySelector(".row-data").innerHTML=weatherBox
  }





