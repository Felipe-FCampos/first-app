import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    HomeComponent
  ],
  providers: [],
})
export class AppModule { 
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent);
  }
 }
