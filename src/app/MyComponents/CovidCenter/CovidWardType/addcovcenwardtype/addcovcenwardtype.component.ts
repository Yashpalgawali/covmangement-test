import { Component, OnInit } from '@angular/core';
import { CovcenwardtypeService } from '../../../../Services/CovidCenterWardType/covcenwardtype.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import CovCenWardType from '../../../../Models/CovCenWardType';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcovcenwardtype',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './addcovcenwardtype.component.html',
  styleUrl: './addcovcenwardtype.component.css'
})
export class AddcovcenwardtypeComponent implements OnInit{
   
  covcenwardtype : CovCenWardType = new CovCenWardType() 
  covcenwardtype_id : any

  component_name : any

  constructor(private covcenwardtypeserv : CovcenwardtypeService,private router : Router,
              private route : ActivatedRoute) { }
  ngOnInit(): void {
    
    this.covcenwardtype_id = this.route.snapshot.params['wardtypeid']

    if(this.covcenwardtype_id != null) {
      this.component_name = 'Update CovidCenter Ward Type'
      this.covcenwardtypeserv.getCovidCenterWardTypeById(this.covcenwardtype_id).subscribe({
        next:(data) =>{
            this.covcenwardtype = data
        },
      })
    }
    else {
      this.component_name = 'Add CovidCenter Ward Type'
    }

  }

  onSubmit() {
    if(this.covcenwardtype.covcenwardtype_id!= null)
    {
      this.covcenwardtypeserv.updateCovidCenterWardType(this.covcenwardtype).subscribe({
        next:(data) =>{
            sessionStorage.setItem('response','Ward Type is updated successfully')
            this.router.navigate(['/covidcenter/wardtype'])
        },
        error:(err) =>{
          sessionStorage.setItem('reserr','Ward Type is not updated ')
          this.router.navigate(['/covidcenter/wardtype'])
        }  
      })
    }
    else {
      this.covcenwardtypeserv.saveCovidCenterWardType(this.covcenwardtype).subscribe({
        next:(data) =>{
            sessionStorage.setItem('response','Ward Type is saved successfully')
            this.router.navigate(['/covidcenter/wardtype'])
        },
        error:(err) =>{
          sessionStorage.setItem('reserr','Ward Type is not saved ')
          this.router.navigate(['/covidcenter/wardtype'])
        }  
      })
    }
  }
}
