import { Component, Input } from '@angular/core';
import { HouselocationComponent } from '../houselocation/houselocation.component';
import { CommonModule } from '@angular/common';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-home',
  standalone:true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports:[CommonModule,
    HouselocationComponent]
})
export class HomeComponent {
  Houses: any[] = [];

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.loadHousesData();
  }

  loadHousesData() {
    this.houseService.getHouses().subscribe((data) => {
      this.Houses = data;
    });
  }
}


