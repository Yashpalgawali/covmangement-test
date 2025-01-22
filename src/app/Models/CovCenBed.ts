import { CovCenWard } from "./CovCenWard"

export class CovCenBed {
    covcenbed_id !: number
    covcenbed_num !: string
    covcenward : CovCenWard = new CovCenWard() 
}