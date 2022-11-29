import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoOneComponent } from './compo-one/compo-one.component';
import {RouterModule,Routes} from '@angular/router';
import { CompoTwoComponent } from './compo-two/compo-two.component';

@NgModule({
  declarations: [
    AppComponent,
    CompoOneComponent,
    CompoTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
