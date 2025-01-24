import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CovcenpatientService } from '../../../../Services/CovidCenterPatient/covcenpatient.service';
import { CovcendoctorService } from '../../../../Services/CovidCenterDoctor/covcendoctor.service';
import { CovcenbedService } from '../../../../Services/CovidCenterBed/covcenbed.service';
import { CovCenPatient } from '../../../../Models/CovCenPatient';

@Component({
  selector: 'app-viewcovenpatients',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './viewcovenpatients.component.html',
  styleUrl: './viewcovenpatients.component.css'
})
export class ViewcovenpatientsComponent implements OnInit{

  response : any
  reserr : any
   
  covcenpatientlist : CovCenPatient[] =[]

  constructor(private covcenpatserv : CovcenpatientService,private  router : Router,
              private covcendocserv : CovcendoctorService,private covcenbedserv : CovcenbedService
  ){}
 
  ngOnInit(): void {
    if(sessionStorage.getItem('response')!= null) {
      this.response =sessionStorage.getItem('response')
      setTimeout(() => {
        this.response = ' '
        sessionStorage.removeItem('response')

      }, 3000);
    }

    if(sessionStorage.getItem('reserr')!= null) {
      this.reserr =sessionStorage.getItem('reserr')
      setTimeout(() => {
        this.reserr = ' '
        sessionStorage.removeItem('reserr')

      }, 3000);
    }

    this.covcenpatserv.getAllCovCenPatients().subscribe({
      next:(data)=> {
          this.covcenpatientlist =data
          this.covcenpatientlist.forEach(patient => {
            if(typeof patient.covcenpatientdoctor != 'object')
              {
                this.covcendocserv.getCovCenDoctorById(patient.covcenpatientdoctor).subscribe({
                  next:(doctor) => {
                    patient.covcenpatientdoctor = doctor
                  },
                })               
              }

              if(typeof patient.covcenpatientbed != 'object')
                {
                  this.covcenbedserv.getCovidCenterBedById(patient.covcenpatientbed).subscribe({
                    next:(doctor) => {
                      patient.covcenpatientbed = doctor
                    },
                  })               
                }
          })
      },
    })
  }

  getPatientByPatientId(pat_id : number){
    this.router.navigate(['edit/covcenter/patient/',pat_id])
  }
}
