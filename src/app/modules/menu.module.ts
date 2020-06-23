import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { ContractingComponent } from './contracting/contracting.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuRouterModule } from './menu-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ServiceModule } from './service/service.module';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatVideoModule } from 'mat-video';



@NgModule({
  declarations: [
    ServicesComponent,
    ContractingComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    MenuRouterModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ServiceModule,
    MatVideoModule
  ]
})
export class MenuModule { }
