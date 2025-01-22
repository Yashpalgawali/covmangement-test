import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CovcenbedService } from '../../../../Services/CovidCenterBed/covcenbed.service';
import { CovcenwardService } from '../../../../Services/CovidCenterWard/covcenward.service';
import { CovCenBed } from '../../../../Models/CovCenBed';
import { CovCenWard } from '../../../../Models/CovCenWard';
import { CovcenwardtypeService } from '../../../../Services/CovidCenterWardType/covcenwardtype.service';

@Component({
  selector: 'app-addcovcenbed',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './addcovcenbed.component.html',
  styleUrl: './addcovcenbed.component.css'
})
export class AddcovcenbedComponent implements OnInit{

  covcenbed : CovCenBed = new CovCenBed()
  covcenwardlist : CovCenWard[] = []
  component_name : any
  bedid : any
  constructor(private covcenbedserv : CovcenbedService,private router : Router,private route : ActivatedRoute,
              private covcenwardtypeserv : CovcenwardtypeService,   private covcenwardserv : CovcenwardService) {}
  ngOnInit(): void {
  
    this.bedid = this.route.snapshot.params['bedid']
    if(this.bedid!=null) {
      this.component_name = 'Update Bed'
      this.covcenbedserv.getCovidCenterBedById(this.bedid).subscribe({
        next:(data) => {
            this.covcenbed = data
        },
      })
    }
    else {
      this.component_name = 'Add Bed'
    }
    this.covcenwardserv.getAllCovidCenterWards().subscribe({
        next :(data)=> {
            this.covcenwardlist = data
            this.covcenwardlist.forEach(wards=>{
              if(typeof wards.covcenwardtype != 'object') {
                this.covcenwardtypeserv.getCovidCenterWardTypeById(wards.covcenwardtype).subscribe({
                  next : (wardtype) => {
                      wards.covcenwardtype = wardtype
                  },
                })
              }
            })
        },
    })
  }

  onSubmit() {
      console.log(this.covcenbed)
    if(this.covcenbed.covcenbed_id !=null) {
      this.covcenbedserv.updateCovidCenterBed(this.covcenbed).subscribe({
        next:(data) => {
          sessionStorage.setItem('response','Bed is updated successfully')
          this.router.navigate(['covidcenter/bed'])
      },
      error:(err) => {
          sessionStorage.setItem('response','Bed is not updated')
          this.router.navigate(['covidcenter/bed'])
      }
      })
    }
    else {
      this.covcenbedserv.saveCovidCenterBed(this.covcenbed).subscribe({
        next:(data) => {
          sessionStorage.setItem('response','Bed is saved successfully')
          this.router.navigate(['covidcenter/bed'])
      },
      error:(err) => {
          sessionStorage.setItem('response','Bed is not saved')
          this.router.navigate(['covidcenter/bed'])
      }
      })
    }
  }

}

