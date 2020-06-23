import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContractingComponent } from './contracting/contracting.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
    { path: 'about', component: AboutUsComponent },
    { path: 'constulting', component: ContractingComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class MenuRouterModule { }