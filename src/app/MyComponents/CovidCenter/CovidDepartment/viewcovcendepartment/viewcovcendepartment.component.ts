import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CovcendepartmentService } from '../../../../Services/CovidCenteDepartment/covcendepartment.service';
import { CovCenDepartment } from '../../../../Models/CovCenDepartment';
import { CovidcenterService } from '../../../../Services/CovidCenter/covidcenter.service';

@Component({
  selector: 'app-viewcovcendepartment',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './viewcovcendepartment.component.html',
  styleUrl: './viewcovcendepartment.component.css'
})

export class ViewcovcendepartmentComponent implements OnInit {

  response : any
  reserr : any
  covcenid : any
  covcendeptlist : CovCenDepartment[] = []
  constructor(private covcendeptserv : CovcendepartmentService,private router : Router,
              private covcenserv : CovidcenterService) { }
  
  ngOnInit(): void {
    this.covcendeptserv.getAllCovidCenterDepartments().subscribe({
      next :(data ) => {
          this.covcendeptlist = data
          console.log(this.covcendeptlist)

          this.covcendeptlist.forEach(dept => {
            if(typeof dept.covcenter === 'number') {
              this.covcenserv.getCovidCenterById(dept.covcenter).subscribe({
                next:(covcenobj) =>{
                  dept.covcenter = covcenobj
                },
              })
            }
          })
      },
    })
  }

  getCovCenDeptById(deptid : number)
  {
    this.router.navigate(['/edit/covcenter/department/',deptid])
  }
}
