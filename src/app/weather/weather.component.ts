import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  myWeather:any;
  summary:string = '';
  iconURL:string = '';
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  pressure:number= 0;
  humidity: number = 0;
  cityName:string = 'Paris';
  units:string = 'imperial';

  constructor(private WeatherService:WeatherService){}
  ngOnInit(): void {
    this.getWeatherData()
    this.cityName = '';
  }

  /**
     * search weather by city name
     * @endpoint http://localhost:4200/
     * @method  Get
     * @request body{""}
     * @response All Call Complate
  **/

  onSubmite(){
    this.getWeatherData()
    this.cityName = '';
  }

  private getWeatherData(){
    this.WeatherService.getWeather(this.cityName,this.units).subscribe({
      next: (res)=>{
        // console.log(res)
        this.myWeather = res;
        console.log(this.myWeather);
        this.summary = this.myWeather.weather[0].main;
        this.temperature = this.myWeather.main.temp;
        this.feelsLikeTemp = this.myWeather.main.feels_like;
        this.pressure = this.myWeather.main.pressure;
        this.humidity = this.myWeather.main.humidity;
        this.iconURL = "http://openweathermap.org/img/wn/"+ this.myWeather.weather[0].icon + "@2x.png";
        this.cityName = this.myWeather.name;
      },
      error: (error)=>console.log(error.message),
      complete: ()=>console.log("All Call Complate")
    })
  }
}
