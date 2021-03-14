import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanvasAddRemoveSquareComponent } from './canvas-add-remove-square/canvas-add-remove-square.component';
import { TimeComponent } from './time/time.component';

const routes: Routes = [
  {path:'canvas', component: CanvasAddRemoveSquareComponent},
  {path: 'time', component: TimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
