import { Routes } from '@angular/router';
import { AddcovidcenterComponent } from './MyComponents/CovidCenter/CovidCenter/addcovidcenter/addcovidcenter.component';
import { ViewcovidcentersComponent } from './MyComponents/CovidCenter/CovidCenter/viewcovidcenters/viewcovidcenters.component';
import { AddcovcendepartmentComponent } from './MyComponents/CovidCenter/CovidDepartment/addcovcendepartment/addcovcendepartment.component';
import { ViewcovcendepartmentComponent } from './MyComponents/CovidCenter/CovidDepartment/viewcovcendepartment/viewcovcendepartment.component';
import { AddcovcenwardtypeComponent } from './MyComponents/CovidCenter/CovidWardType/addcovcenwardtype/addcovcenwardtype.component';
import { ViewcovcenwardtypeComponent } from './MyComponents/CovidCenter/CovidWardType/viewcovcenwardtype/viewcovcenwardtype.component';
import { AddcovidcenwardComponent } from './MyComponents/CovidCenter/CovidWard/addcovidcenward/addcovidcenward.component';
import { ViewcovidcenwardsComponent } from './MyComponents/CovidCenter/CovidWard/viewcovidcenwards/viewcovidcenwards.component';
import { AddcovcenbedComponent } from './MyComponents/CovidCenter/CovidCenterBed/addcovcenbed/addcovcenbed.component';
import { ViewcovcenbedsComponent } from './MyComponents/CovidCenter/CovidCenterBed/viewcovcenbeds/viewcovcenbeds.component';

export const routes: Routes = [
    { path : "addcovcenter" , component: AddcovidcenterComponent },
    { path : "covidcenter" , component: ViewcovidcentersComponent },
    { path : "edit/covcenter/:covcenid" , component: AddcovidcenterComponent },

    { path : "add/covidcenter/department" , component: AddcovcendepartmentComponent },
    { path : "covidcenter/department" , component: ViewcovcendepartmentComponent },
    { path : "edit/covcenter/department/:covcenid" , component: AddcovcendepartmentComponent },

    { path : "add/covidcenter/wardtype" , component: AddcovcenwardtypeComponent },
    { path : "covidcenter/wardtype" , component: ViewcovcenwardtypeComponent },
    { path : "edit/covcenter/wardtype/:wardtypeid" , component: AddcovcenwardtypeComponent },

    { path : "add/covidcenter/ward" , component: AddcovidcenwardComponent },
    { path : "covidcenter/wards" , component: ViewcovidcenwardsComponent },
    { path : "edit/covcenter/ward/:ward_id" , component: AddcovidcenwardComponent },

    { path : "add/covidcenter/bed" , component: AddcovcenbedComponent },
    { path : "covidcenter/bed" , component: ViewcovcenbedsComponent },
    { path : "edit/covcenter/bed/:bedid" , component: AddcovcenbedComponent }
];
