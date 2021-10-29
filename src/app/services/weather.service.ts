import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  
  getWeather = () => {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Londres&appid=9ed580e836edb10aa03a80928ad0cc3c&lang=pt_br&units=metric');
  }

}
