import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getWeather(){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=dc548368399eeac14dc7ee6a06bfed38&units=imperial');
  }
}
