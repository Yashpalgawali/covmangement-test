import { Component, OnInit } from '@angular/core';
import { CovidcenterService } from '../../../../Services/CovidCenter/covidcenter.service';
import { Router, RouterLink } from '@angular/router';
import { CovCenter } from '../../../../Models/CovCenter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewcovidcenters',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './viewcovidcenters.component.html',
  styleUrl: './viewcovidcenters.component.css'
})
export class ViewcovidcentersComponent implements OnInit {

  covcenlist : CovCenter [] = []
  response : any
  reserr : any

  constructor(private covcenserv : CovidcenterService,private router : Router) { }
  ngOnInit(): void {
    if(sessionStorage.getItem('response')!=null) {
      this.response = sessionStorage.getItem('response')
      setTimeout(() => {
        sessionStorage.removeItem('response')
        this.response = ''
      }, 3000);
    }

    if(sessionStorage.getItem('reserr')!=null) {
      this.reserr = sessionStorage.getItem('reserr')
      setTimeout(() => {
        sessionStorage.removeItem('reserr')
        this.reserr = ''
      }, 3000);
    }

    this.covcenserv.getAllCovidCenters().subscribe({
      next: (data) => {
          this.covcenlist = data
      },
    })
  }

  getCovidCenterById(covcen_id : number){
    this.router.navigate(['edit/covcenter/',covcen_id])
  }
}
