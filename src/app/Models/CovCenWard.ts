import { CovCenDepartment } from "./CovCenDepartment"
import CovCenWardType from "./CovCenWardType"

export class CovCenWard {

    covcenward_id !: number
    covcenward_num !: number
    covcenwardtype : CovCenWardType = new  CovCenWardType()
    covcendept : CovCenDepartment = new CovCenDepartment() 
    
}