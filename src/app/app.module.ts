import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuildingComponentComponent } from './building-component/building-component.component';
import { LoggedDataComponentComponent } from './logged-data-component/logged-data-component.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    BuildingComponentComponent,
    LoggedDataComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
