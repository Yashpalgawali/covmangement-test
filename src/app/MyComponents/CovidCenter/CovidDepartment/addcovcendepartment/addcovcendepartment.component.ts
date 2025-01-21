import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovcendepartmentService } from '../../../../Services/CovidCenteDepartment/covcendepartment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CovCenDepartment } from '../../../../Models/CovCenDepartment';
import { CovCenter } from '../../../../Models/CovCenter';
import { CovidcenterService } from '../../../../Services/CovidCenter/covidcenter.service';

@Component({
  selector: 'app-addcovcendepartment',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addcovcendepartment.component.html',
  styleUrl: './addcovcendepartment.component.css'
})
export class AddcovcendepartmentComponent implements OnInit{

  component_name !: string
  covcenid : any
  covcendept : CovCenDepartment = new CovCenDepartment()
  covcenlist : CovCenter[] =[]

  constructor(private router : Router,private covcendeptserv : CovcendepartmentService,
               private route : ActivatedRoute,private covcenserv : CovidcenterService) {}
  ngOnInit(): void {
      
    this.covcenid = this.route.snapshot.params['covcenid']
    if(this.covcenid != null) {
      this.component_name = 'Update Department'
      this.covcendeptserv.getCovidCenterDepartmentById(this.covcenid).subscribe({
        next:(data) => {
          this.covcendept = data
        }
      })
    }
    else {
      this.component_name = 'Add Department'
    }
    this.covcenserv.getAllCovidCenters().subscribe({
      next:(data) => {          
        this.covcenlist = data
      },
    })

  }

  onSubmit() {

    if(this.covcendept.covcendept_id!=null) {
      this.covcendeptserv.updateCovidCenterDepartment(this.covcendept).subscribe({
        next:(data)=> {            
          sessionStorage.setItem('response','Department is updated successfully')
          this.router.navigate(['covidcenter/department'])
        },
        error:(err)=> {            
          sessionStorage.setItem('reserr','Department is not updated ')
          this.router.navigate(['covidcenter/department'])
        }
      })
    }
    else {
      this.covcendeptserv.saveCovidCenterDepartment(this.covcendept).subscribe({
        next:(data)=> {            
          sessionStorage.setItem('response','Department is saved successfully')
          this.router.navigate(['covidcenter/department'])
        },
        error:(err)=> {            
          sessionStorage.setItem('reserr','Department is not saved ')
          this.router.navigate(['covidcenter/department'])
        }
      })
    }
  }
}
