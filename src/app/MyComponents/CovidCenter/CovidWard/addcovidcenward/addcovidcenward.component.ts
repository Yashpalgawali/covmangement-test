import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CovcenwardService } from '../../../../Services/CovidCenterWard/covcenward.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CovCenWard } from '../../../../Models/CovCenWard';
import CovCenWardType from '../../../../Models/CovCenWardType';
import { CovcenwardtypeService } from '../../../../Services/CovidCenterWardType/covcenwardtype.service';
import { CovcendepartmentService } from '../../../../Services/CovidCenteDepartment/covcendepartment.service';
import { CovCenDepartment } from '../../../../Models/CovCenDepartment';

@Component({
  selector: 'app-addcovidcenward',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addcovidcenward.component.html',
  styleUrl: './addcovidcenward.component.css'
})

export class AddcovidcenwardComponent implements OnInit{

  covcenward : CovCenWard = new  CovCenWard()
  covcenwardtypelist : CovCenWardType [] = []

  covcendeptlist : CovCenDepartment[] = []
  ward_id : any
  component_name :any

  constructor(private covcenwardserv : CovcenwardService,private router : Router,private route : ActivatedRoute,
              private covcendeptserv : CovcendepartmentService,private covcenwardtypeserv : CovcenwardtypeService){ }
  
    ngOnInit(): void {
      
      this.ward_id = this.route.snapshot.params['ward_id']
      if(this.ward_id !=null) {
        this.component_name = 'Update Ward'
        this.covcenwardserv.getCovidCenterWardById(this.ward_id).subscribe({
          next:(data) =>{
              this.covcenward = data
          },
        })
      }
      else {
        this.component_name = 'Add Ward'
      }
      this.covcenwardtypeserv.getAllCovidCenterWardTypes().subscribe({
        next:(data) => {
            this.covcenwardtypelist = data
        },
      })
      this.covcendeptserv.getAllCovidCenterDepartments().subscribe({
        next: (data)=> {
          this.covcendeptlist = data
        },
      })
  }

  onSubmit() {

    if(this.covcenward.covcenward_id!=null) {
      this.covcenwardserv.updateCovidCenterWard(this.covcenward).subscribe({
        next : (data) => {
            sessionStorage.setItem('response','Ward is updated successfully')
            this.router.navigate(['covidcenter/wards'])
        },
        error : (err) => {
          sessionStorage.setItem('reserr','Ward is not updated ')
          this.router.navigate(['covidcenter/wards'])
        }
      })
    }
    else {
      this.covcenwardserv.saveCovidCenterWard(this.covcenward).subscribe({
        next : (data) => {
            sessionStorage.setItem('response','Ward is saved successfully')
            this.router.navigate(['covidcenter/wards'])
        },
        error : (err) => {
          sessionStorage.setItem('reserr','Ward is not saved ')
          this.router.navigate(['covidcenter/wards'])
        }
      })
    }
  }
}
