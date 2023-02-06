import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  /**
     * current weather api
     * @endpoint http://localhost:4200/
     * @method  Get
     * @request body{""}
     * @response All Call Complate
  **/
  getWeather(city:string,units:string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=dc548368399eeac14dc7ee6a06bfed38&units='+units);
  }
}
