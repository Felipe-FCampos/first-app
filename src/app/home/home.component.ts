import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'router-outlet',
  standalone: true,
  imports: [CommonModule,
    HousingLocationComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  
    housingLocationList: Housinglocation[] = [];

    //housingService: HousingService = inject(HousingService);

    filteredLocationList: Housinglocation[] = [];

    filterResults(text: string) {
      if (!text) {
        this.filteredLocationList = this.housingLocationList;
      }
    
      this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      );
    }

    constructor(private housingService: HousingService) {
      this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
          this.housingLocationList = housingLocationList;
          this.filteredLocationList = housingLocationList;
      });
  }

    //constructor() {
        //this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
          //this.housingLocationList = housingLocationList;
          //this.filteredLocationList = housingLocationList;
        //});
      //}
    }


