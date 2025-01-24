import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CovcendoctorService } from '../../../../Services/CovidCenterDoctor/covcendoctor.service';
import { CovcendepartmentService } from '../../../../Services/CovidCenteDepartment/covcendepartment.service';
import { CovCenDoctor } from '../../../../Models/CovCenDoctor';

@Component({
  selector: 'app-viewcovcendoctors',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './viewcovcendoctors.component.html',
  styleUrl: './viewcovcendoctors.component.css'
})
export class ViewcovcendoctorsComponent implements OnInit{

  response : any
  reserr : any

  covcendoclist : CovCenDoctor[] = []
  constructor(private covcendocserv : CovcendoctorService,private router : Router,
              private covcendeptserv : CovcendepartmentService) {}
  ngOnInit(): void {
     if(sessionStorage.getItem('response')!=null) {
      this.response = sessionStorage.getItem('response')
      alert('response = '+this.response)
      setTimeout(() => {
        this.response = ''
        sessionStorage.removeItem('response')
      }, 3000);
    }

    if(sessionStorage.getItem('reserr')!=null) {
      this.reserr = sessionStorage.getItem('reserr')
      setTimeout(() => {
        this.reserr = ''
        sessionStorage.removeItem('reserr')
      }, 3000);
    }

    this.covcendocserv.getAllCovCenDoctors().subscribe({
      next : (data) =>{
          this.covcendoclist = data
          this.covcendoclist.forEach(docs => {
            if(typeof docs.covcendepartment != 'object')
            {
              this.covcendeptserv.getCovidCenterDepartmentById(docs.covcendepartment).subscribe({
                next:(dept) => {
                    docs.covcendepartment = dept
                },
              })
            }
          })
      },
    })
  }

  getCovCenDocByDocId(docid : number){
    this.router.navigate(['edit/covcenter/doctor/',docid])
  }
}
