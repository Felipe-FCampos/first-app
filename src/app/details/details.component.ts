import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,
  ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
    //route: ActivatedRoute = inject(ActivatedRoute);
    HousingService = inject(HousingService);
    HousingLocation: Housinglocation | undefined;
    HousingLocationId = 0;
    
    applyForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('')
    });

    constructor(private route: ActivatedRoute, private housingService: HousingService) {
      const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
      this.HousingService.getHousingLocationById(housingLocationId).then(housingLocation => {
        this.HousingLocation = housingLocation;
      });
  }

  submitApplication() {
    this.HousingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
