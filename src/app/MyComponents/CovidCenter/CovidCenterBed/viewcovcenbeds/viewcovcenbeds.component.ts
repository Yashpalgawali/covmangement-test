import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CovcenbedService } from '../../../../Services/CovidCenterBed/covcenbed.service';
import { CovcenwardService } from '../../../../Services/CovidCenterWard/covcenward.service';
import { CovCenBed } from '../../../../Models/CovCenBed';

@Component({
  selector: 'app-viewcovcenbeds',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './viewcovcenbeds.component.html',
  styleUrl: './viewcovcenbeds.component.css'
})
export class ViewcovcenbedsComponent implements OnInit{

  response : any
  reserr : any
  wardid :any

  covcenbedlist : CovCenBed [] =[] 
  constructor(private covncenbedserv : CovcenbedService,private covcenwardserv : CovcenwardService,
            private router : Router  ) {}
  
  ngOnInit(): void {
    if(sessionStorage.getItem('response')!=null)  {
      this.response = sessionStorage.getItem('response')
      setTimeout(() => {
        this.response = ''
        sessionStorage.removeItem('response')
      }, 3000);
    }
    if(sessionStorage.getItem('reserr')!=null)  {
      this.reserr = sessionStorage.getItem('reserr')
      setTimeout(() => {
        this.reserr = ''
        sessionStorage.removeItem('reserr')
      }, 3000);
    }
    this.covncenbedserv.getAllCovidCenterBeds().subscribe({
      next:(data) => {
        this.covcenbedlist = data
        this.covcenbedlist.forEach(beds => {
          if(typeof beds.covcenward != 'object') {
            this.covcenwardserv.getCovidCenterWardById(beds.covcenward).subscribe({
              next : (ward) => {
                  beds.covcenward = ward
              },
            }) 
          }
        })
      },
    })
  }

  getCovCenBedById(bedid : number) {
    this.router.navigate(['edit/covcenter/bed/',bedid])
  }
}
