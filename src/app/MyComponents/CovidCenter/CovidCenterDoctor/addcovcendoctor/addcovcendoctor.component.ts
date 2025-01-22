import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CovCenDoctor } from '../../../../Models/CovCenDoctor';
import { ActivatedRoute, Router } from '@angular/router';
import { CovcendoctorService } from '../../../../Services/CovidCenterDoctor/covcendoctor.service';
import { CovcendepartmentService } from '../../../../Services/CovidCenteDepartment/covcendepartment.service';
import { CovCenDepartment } from '../../../../Models/CovCenDepartment';

@Component({
  selector: 'app-addcovcendoctor',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addcovcendoctor.component.html',
  styleUrl: './addcovcendoctor.component.css'
})
export class AddcovcendoctorComponent implements OnInit {

  component_name : any
  covcendoc : CovCenDoctor = new CovCenDoctor()
  covcendeptlist : CovCenDepartment[] = []
  doc_id : any
  constructor(private router : Router,private route : ActivatedRoute,private covcendocserv : CovcendoctorService,
              private covcendeptserv : CovcendepartmentService) {}
  
  ngOnInit(): void {
    this.doc_id =  this.route.snapshot.params['doc_id']    
    if(this.doc_id== null) {
      this.component_name = 'Add Doctor'
    }
    else {
      this.component_name = 'Update Doctor'

      this.covcendocserv.getCovCenDoctorById(this.doc_id).subscribe({
        next : (data)=> {
          this.covcendoc =data
          
        }
      })
    }
   
  }

  onSubmit()
  {
    if(this.covcendoc.covcendoc_id!=null) {
      this.covcendocserv.updateCovCenDoctor(this.covcendoc).subscribe({
        next : (data)=> {
          sessionStorage.setItem('response','Doctor is updated successfully')
          this.router.navigate(['covidcenter/doctor'])
      },
      error : (err)=> {
        sessionStorage.setItem('reserr','Doctor is not updated ')
        this.router.navigate(['covidcenter/doctor'])
      }
      })
    }
    else {
      this.covcendocserv.saveCovCenDoctor(this.covcendoc).subscribe({
        next : (data)=> {
          sessionStorage.setItem('response','Doctor is saved successfully')
          this.router.navigate(['covidcenter/doctor'])
      },
      error : (err)=> {
        sessionStorage.setItem('reserr','Doctor is not saved')
        this.router.navigate(['covidcenter/doctor'])
      }
      })
    }
  }
}
