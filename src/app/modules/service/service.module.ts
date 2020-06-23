import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ItComponent } from './it/it.component';
import { ProgrammingComponent } from './programming/programming.component';
import { JanitorialComponent } from './janitorial/janitorial.component';
import { LawnComponent } from './lawn/lawn.component';
import { TransportationComponent } from './transportation/transportation.component';
import { TrainingComponent } from './training/training.component';
import { PestControlComponent } from './pest-control/pest-control.component';


@NgModule({
  declarations: [ItComponent, ProgrammingComponent, JanitorialComponent, LawnComponent, TransportationComponent, TrainingComponent, PestControlComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
