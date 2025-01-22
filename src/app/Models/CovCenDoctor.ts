import { CovCenDepartment } from "./CovCenDepartment"

export class CovCenDoctor {
    covcendoc_id !: number
    covcendoc_name !: string
    covcendepartment : CovCenDepartment = new CovCenDepartment() 
}