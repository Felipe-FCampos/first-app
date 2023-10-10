import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-houselocation',
  standalone:true,
  templateUrl: './houselocation.component.html',
  styleUrls: ['./houselocation.component.scss'],
  imports:[CommonModule, 
    RouterModule]
})
export class HouselocationComponent {

  @Input() house: any;
}
