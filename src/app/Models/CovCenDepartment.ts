import { CovCenDoctor } from "./CovCenDoctor"
import { CovCenter } from "./CovCenter"

export class CovCenDepartment {
    covcendept_id !: number
    covcendept_name !: string
    covcenter : CovCenter = new CovCenter()

    covcendoctor : CovCenDoctor[] = []
}