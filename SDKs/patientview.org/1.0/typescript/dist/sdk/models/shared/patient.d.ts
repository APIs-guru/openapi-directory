import { SpeakeasyBase } from "../../../internal/utils";
import { Code } from "./code";
import { FhirAllergy } from "./fhirallergy";
import { FhirCondition } from "./fhircondition";
import { FhirEncounter } from "./fhirencounter";
import { FhirObservation } from "./fhirobservation";
import { FhirPatient } from "./fhirpatient";
import { FhirPractitioner } from "./fhirpractitioner";
import { Group } from "./group";
export declare class Patient extends SpeakeasyBase {
    diagnosisCodes?: Code[];
    fhirAllergies?: FhirAllergy[];
    fhirConditions?: FhirCondition[];
    fhirEncounters?: FhirEncounter[];
    fhirObservations?: FhirObservation[];
    fhirPatient?: FhirPatient;
    fhirPractitioners?: FhirPractitioner[];
    group?: Group;
    id?: number;
}
