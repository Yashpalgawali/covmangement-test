import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CovcenwardService } from '../../../../Services/CovidCenterWard/covcenward.service';
import { CovCenWard } from '../../../../Models/CovCenWard';
import { CovcenwardtypeService } from '../../../../Services/CovidCenterWardType/covcenwardtype.service';
import { CovcendepartmentService } from '../../../../Services/CovidCenteDepartment/covcendepartment.service';

@Component({
  selector: 'app-viewcovidcenwards',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './viewcovidcenwards.component.html',
  styleUrl: './viewcovidcenwards.component.css'
})
export class ViewcovidcenwardsComponent implements OnInit{

  response : any
  reserr : any

  covcenwardlist : CovCenWard[] =[]
  wardtype_id !: number

  constructor(private covcenwardserv : CovcenwardService,private covcendeptserv : CovcendepartmentService,
              private router : Router, private covcenwardtypeserv : CovcenwardtypeService){}
  ngOnInit(): void {
    if(sessionStorage.getItem('response')!=null) {
      this.response = sessionStorage.getItem('response')
      setTimeout(() => {
        this.response =''
        sessionStorage.removeItem('response')
      }, 3000);
    }

    if(sessionStorage.getItem('reserr')!=null) {
      this.reserr = sessionStorage.getItem('reserr')
      setTimeout(() => {
        this.reserr =''
        sessionStorage.removeItem('reserr')
      }, 3000);
    }

    this.covcenwardserv.getAllCovidCenterWards().subscribe({
      next : (data) => {
          this.covcenwardlist = data
          this.covcenwardlist.forEach(wards => {
            console.log(wards)
            if(typeof wards.covcenwardtype != 'object') {
              
              this.covcenwardtypeserv.getCovidCenterWardTypeById(wards.covcenwardtype).subscribe({
                next:(wardobj) =>{
                    wards.covcenwardtype = wardobj
                },
              })
            }
            if(typeof wards.covcendept != 'object') {
              
              this.covcendeptserv.getCovidCenterDepartmentById(wards.covcendept).subscribe({
                next: (obj) =>{
                  wards.covcendept = obj
                },
              })
            }
          })
          
      },
    })
  }

  getCovCenWardById(wardid : number) {
    this.router.navigate(['edit/covcenter/ward/',wardid])
  }
}
