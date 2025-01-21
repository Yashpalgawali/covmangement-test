import { Routes } from '@angular/router';
import { AddcovidcenterComponent } from './MyComponents/CovidCenter/CovidCenter/addcovidcenter/addcovidcenter.component';
import { ViewcovidcentersComponent } from './MyComponents/CovidCenter/CovidCenter/viewcovidcenters/viewcovidcenters.component';
import { AddcovcendepartmentComponent } from './MyComponents/CovidCenter/CovidDepartment/addcovcendepartment/addcovcendepartment.component';
import { ViewcovcendepartmentComponent } from './MyComponents/CovidCenter/CovidDepartment/viewcovcendepartment/viewcovcendepartment.component';

export const routes: Routes = [
    { path : "addcovcenter" , component: AddcovidcenterComponent },
    { path : "covidcenter" , component: ViewcovidcentersComponent },
    { path : "edit/covcenter/:covcenid" , component: AddcovidcenterComponent },

    { path : "add/covidcenter/department" , component: AddcovcendepartmentComponent },
    { path : "covidcenter/department" , component: ViewcovcendepartmentComponent },
    { path : "edit/covcenter/department/:covcenid" , component: AddcovcendepartmentComponent }
];
