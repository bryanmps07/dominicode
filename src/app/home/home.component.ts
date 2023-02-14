import { Component, OnInit } from '@angular/core';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'reto06';
  
  cities: City[] = [];
  selection!: City;
  criterio = ''
  
  constructor(private readonly dataSVc: DataService) {}
  
  ngOnInit(): void {
    this.dataSVc.getCities()
    .subscribe(cities => {
      this.cities = [...cities];
    });
  }

  addNewCity(city: string): void {
    //this.cities.push(city);
    this.dataSVc.addNewCity(city).subscribe(res => {
      this.cities.push(res);
      this.onClear();
    });
  }

  onCitySelected(city: City): void {
    this.selection = city;
  }

  updateCity(city: City): void {
    this.dataSVc.updateCity(city).subscribe( res => {
      const tempArr = this.cities.filter(item => item._id !== city._id);
      this.cities = [...tempArr, city];
      this.onClear();
    });
  }

  onCityDelete(id: string): void {
    if ( confirm('Are you sure?') ) {
      this.dataSVc.deleteCity(id).subscribe( res => {
        const tempArr = this.cities.filter(city => city._id !== id);
        this.cities = tempArr;
        this.onClear();
      });
    }
  }

  onClear(): void {
    this.selection = {
      _id: '',
      name: ''
    };
  }

}
