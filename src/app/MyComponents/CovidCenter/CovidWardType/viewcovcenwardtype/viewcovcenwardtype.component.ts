import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CovcenwardtypeService } from '../../../../Services/CovidCenterWardType/covcenwardtype.service';
import CovCenWardType from '../../../../Models/CovCenWardType';

@Component({
  selector: 'app-viewcovcenwardtype',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './viewcovcenwardtype.component.html',
  styleUrl: './viewcovcenwardtype.component.css'
})
export class ViewcovcenwardtypeComponent implements OnInit{

  response : any
  reserr : any
  
  covncewardtypelist : CovCenWardType[] = []
  constructor(private covcenwardtypeserv : CovcenwardtypeService,private router : Router){ }
  ngOnInit(): void {
    if(sessionStorage.getItem('response')!=null) {
      this.response = sessionStorage.getItem('response')
      setTimeout(() => {
        this.response=''
        sessionStorage.removeItem('response')
        
      }, 3000);
    }

    if(sessionStorage.getItem('reserr')!=null) {
      this.reserr = sessionStorage.getItem('reserr')
      setTimeout(() => {
        this.reserr=''
        sessionStorage.removeItem('reserr')
        
      }, 3000);
    }
    this.covcenwardtypeserv.getAllCovidCenterWardTypes().subscribe({
      next:(data)=> {
          this.covncewardtypelist =data
      },
    })
  }

  getWardTypeById(id : number) {
    this.router.navigate(['edit/covcenter/wardtype/',id])
  }
}
