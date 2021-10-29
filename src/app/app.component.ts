import { Component } from '@angular/core';
import { City } from './interfaces/city';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cidades: Array<City> = []

  constructor(private weatherService: WeatherService) {
    weatherService.getWeather().subscribe(valor => {
      this.cidades.push(valor as City);
      this.cidades.push(valor as City);
      this.cidades.push(valor as City);
      console.log(this.cidades)
    })
  }
  title = 'comeia-timezone';
}
