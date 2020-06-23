import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItComponent } from './it/it.component';
import { ProgrammingComponent } from './programming/programming.component';
import { JanitorialComponent } from './janitorial/janitorial.component';
import { LawnComponent } from './lawn/lawn.component';
import { TransportationComponent } from './transportation/transportation.component';
import { TrainingComponent } from './training/training.component';
import { PestControlComponent } from './pest-control/pest-control.component';


const routes: Routes = [
  { path: 'it', component: ItComponent },
  { path: 'cp', component: ProgrammingComponent },
  { path: 'jan', component: JanitorialComponent },
  { path: 'ls', component: LawnComponent },
  { path: 'trans', component: TransportationComponent },
  { path: 'ct', component: TrainingComponent },
  { path: 'pc', component: PestControlComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
