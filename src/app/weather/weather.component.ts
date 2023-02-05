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

  constructor(private WeatherService:WeatherService){}
  ngOnInit(): void {
    this.WeatherService.getWeather().subscribe({
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
      },
      error: (error)=>console.log(error.message),
      complete: ()=>console.log("All Call Complate")
    })
  }
}
