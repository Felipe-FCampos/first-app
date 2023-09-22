import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Houses } from '../houses';
import { CommonModule } from '@angular/common';

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
