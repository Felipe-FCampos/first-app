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
  //name = 'Teste';
  //city = 'Chicago';
  //state = 'ÍL';
  //photo = 'https://lh3.googleusercontent.com/wxDVXVvooEJS3fNRgq738aGjHRbl-Ejfhmz_h83csRN9_tY9Bh7Iv8vHteypmxGOQ9GDDlGdMbVwOxYC1fpiijvxM1JNyEn4FTSMlc0ngyQ=s0'

    constructor(
      private route: ActivatedRoute,
      private houseService: HouseService,
    ){}

    ngOnInit(): void {
      this.route.params.subscribe((params) => {
        const id = +params['id'];
        if(!isNaN(id)){
        this.houseService.getHouseById(id).subscribe((data: any) => {
          //this.house = data;
        });
      } else {
        console.error('ID invalido: ', params['id']);
      }
      })
    }
}
