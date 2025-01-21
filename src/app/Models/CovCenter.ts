import { CovCenDepartment } from "./CovCenDepartment"

export class CovCenter{

    covcenter_id !: number
    covcenter_name !: string
    covcendept : CovCenDepartment[] =[] 
}