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
import { AddcovcendoctorComponent } from './MyComponents/CovidCenter/CovidCenterDoctor/addcovcendoctor/addcovcendoctor.component';
import { ViewcovcendoctorsComponent } from './MyComponents/CovidCenter/CovidCenterDoctor/viewcovcendoctors/viewcovcendoctors.component';
import { AddcovcenpatientComponent } from './MyComponents/CovidCenter/CovidCenterPatient/addcovcenpatient/addcovcenpatient.component';
import { ViewcovenpatientsComponent } from './MyComponents/CovidCenter/CovidCenterPatient/viewcovenpatients/viewcovenpatients.component';

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
    { path : "edit/covcenter/bed/:bedid" , component: AddcovcenbedComponent },

    { path : "add/covidcenter/doctor" , component: AddcovcendoctorComponent },
    { path : "covidcenter/doctor" , component: ViewcovcendoctorsComponent },
    { path : "edit/covcenter/doctor/:doc_id" , component: AddcovcendoctorComponent },

    { path : "add/covcenter/patient" , component: AddcovcenpatientComponent },
    { path : "covidcenter/patients" , component: ViewcovenpatientsComponent },
    { path : "edit/covcenter/patient/:pat_id" , component: AddcovcenpatientComponent }


];
