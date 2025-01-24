import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CovcenpatientService } from '../../../../Services/CovidCenterPatient/covcenpatient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CovCenPatient } from '../../../../Models/CovCenPatient';
import { CovCenDoctor } from '../../../../Models/CovCenDoctor';
import { CommonModule } from '@angular/common';
import { CovcendoctorService } from '../../../../Services/CovidCenterDoctor/covcendoctor.service';
import { CovcenbedService } from '../../../../Services/CovidCenterBed/covcenbed.service';
import { CovCenBed } from '../../../../Models/CovCenBed';

@Component({
  selector: 'app-addcovcenpatient',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addcovcenpatient.component.html',
  styleUrl: './addcovcenpatient.component.css'
})
export class AddcovcenpatientComponent implements OnInit{

  covcenpat : CovCenPatient = new CovCenPatient()
covcendoclist : CovCenDoctor[] =[]
covcenbedlist : CovCenBed[] = []
  component_name : any
  pat_id : any
  constructor(private covcenpatserv : CovcenpatientService,private router : Router,private covcenbedserv : CovcenbedService,
            private route : ActivatedRoute,private covcendocserv : CovcendoctorService  ){}
  
  ngOnInit(): void {
    this.pat_id = this.route.snapshot.params['pat_id']

    if(this.pat_id != null) {
      this.component_name = 'Update Patient'
      this.covcenpatserv.getCovCenPatientById(this.pat_id).subscribe({
        next:(data)=>{
            this.covcenpat = data
        }
      })
    }
    else {
      this.component_name = 'Add Patient'
    }
    this.covcendocserv.getAllCovCenDoctors().subscribe({
      next:(data) =>{
          this.covcendoclist =data
      },
    })
    
  }

  onSubmit(){
    if(this.covcenpat.covcenpatient_id!=null) {

      this.covcenpatserv.updateCovCenPatient(this.covcenpat).subscribe({
        next : (data) =>{
          sessionStorage.setItem('response','Patient is updated successfully')
          this.router.navigate(['covidcenter/patients'])
        },
        error : (err) =>{
          sessionStorage.setItem('response','Patient is not updated')
          this.router.navigate(['covidcenter/patients'])
        }
      })
    }
    else {
      this.covcenpatserv.saveCovCenPatient(this.covcenpat).subscribe({
        next : (data) =>{
          sessionStorage.setItem('response','Patient is saved successfully')
          this.router.navigate(['covidcenter/patients'])
        },
        error : (err) =>{
          sessionStorage.setItem('response','Patient is not saved')
          this.router.navigate(['covidcenter/patients'])
        }
      })
    }
  }


  getBedsByDoctorId(doc_id : number ){
    this.covcendocserv.getCovCenDoctorById(doc_id).subscribe({
      next:(data)=> {
        console.log(data)
          //alert(JSON.stringify(data))
      },
    })
  }
}
