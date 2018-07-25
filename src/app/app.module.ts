import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { HeaderComponent } from './header/header.component';

import { LeftComponent } from './left/left.component';
import { MiddleComponent } from './middle/middle.component';
import { RightComponent } from './right/right.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    HeaderComponent,
    LeftComponent,
    MiddleComponent,
    RightComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
