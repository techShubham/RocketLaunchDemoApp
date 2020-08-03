import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RocketListComponent } from './rockets/rocket-list/rocket-list.component';
import { RocketComponent } from './rockets/rocket/rocket.component';
import { RocketListService } from './rockets/rocket-list/rocket-list.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    RocketListComponent,
    RocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [RocketListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
