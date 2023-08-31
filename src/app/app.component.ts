import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HomeComponent,
    DetailsComponent,
  RouterModule],
})
export class AppComponent {
  title = 'first-app';
}
