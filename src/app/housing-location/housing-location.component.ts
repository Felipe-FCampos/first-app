import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,
  RouterLink],
  templateUrl:'./housing-location.component.html',
  styleUrls: ['./housing-location.component.scss']
})

export class HousingLocationComponent {

  @Input() HousingLocation!: Housinglocation;
}
