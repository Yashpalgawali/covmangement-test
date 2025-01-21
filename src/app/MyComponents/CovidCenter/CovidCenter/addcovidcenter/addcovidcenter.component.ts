import { Component, OnInit } from '@angular/core';
import { CovidcenterService } from '../../../../Services/CovidCenter/covidcenter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CovCenter } from '../../../../Models/CovCenter';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addcovidcenter',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addcovidcenter.component.html',
  styleUrl: './addcovidcenter.component.css'
})
export class AddcovidcenterComponent implements OnInit{

  covcenid : any
  component_name !: string
  covcenter : CovCenter = new CovCenter()

  constructor(private covcenserv : CovidcenterService,private router : Router,private route : ActivatedRoute) {}

  ngOnInit(): void {
      
      this.covcenid = this.route.snapshot.params['covcenid']

      if(this.covcenid!=null) {
       this.component_name = 'Update Covid Center'
       this.covcenserv.getCovidCenterById(this.covcenid).subscribe({
        next : (data)=> {
            this.covcenter = data
        },
       })
      }
      else {
        this.component_name = 'Add Covid Center'
      }
  }
  onSubmit() {
    if(this.covcenter.covcenter_id!=null)
    {
      this.covcenserv.updateCovidCenter(this.covcenter).subscribe({
      next:(data) =>{
          sessionStorage.setItem('response','Covid center is updated successfully')
          this.router.navigate(['covidcenter'])
      },
      error:(err) =>{
        sessionStorage.setItem('response','Covid center is not updated ')
        this.router.navigate(['covidcenter'])
      },
    })
   } 
   else {
    this.covcenserv.saveCovidCenter(this.covcenter).subscribe({
      next:(data) =>{
          sessionStorage.setItem('response','Covid center is saved successfully')
          this.router.navigate(['covidcenter'])
      },
      error:(err) =>{
        sessionStorage.setItem('response','Covid center is not saved ')
        this.router.navigate(['covidcenter'])
      },
    })
   }
  }
}
