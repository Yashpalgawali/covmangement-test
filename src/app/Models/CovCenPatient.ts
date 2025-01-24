import { CovCenBed } from "./CovCenBed"
import { CovCenDoctor } from "./CovCenDoctor"

export class CovCenPatient {
    covcenpatient_id !: number
    covcenpatient_name !: string

    covcenpatientdoctor : CovCenDoctor = new CovCenDoctor() 
    covcenpatientbed : CovCenBed = new CovCenBed() 
}