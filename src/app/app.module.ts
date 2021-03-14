import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasAddRemoveSquareComponent } from './canvas-add-remove-square/canvas-add-remove-square.component';
import { FormsModule } from '@angular/forms';
import { TimeComponent } from './time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasAddRemoveSquareComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
