import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  @Input() house: any;

    constructor(
      private route: ActivatedRoute,
      private houseService: HouseService,
    ){}

    ngOnInit(): void {
      this.route.params.subscribe((params) => {
        const id = +params['id'];
        if(!isNaN(id)){
        this.houseService.getHouseById(id).subscribe((data: any) => {
          this.house = data;
        });
      }
      })
    }
}
