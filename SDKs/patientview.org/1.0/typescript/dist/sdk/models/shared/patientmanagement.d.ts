import { SpeakeasyBase } from "../../../internal/utils";
import { FhirCondition } from "./fhircondition";
import { FhirEncounter } from "./fhirencounter";
import { FhirObservation } from "./fhirobservation";
import { FhirPatient } from "./fhirpatient";
import { FhirPractitioner } from "./fhirpractitioner";
export declare class PatientManagement extends SpeakeasyBase {
    condition?: FhirCondition;
    encounters?: FhirEncounter[];
    groupCode?: string;
    identifier?: string;
    observations?: FhirObservation[];
    patient?: FhirPatient;
    practitioners?: FhirPractitioner[];
}
