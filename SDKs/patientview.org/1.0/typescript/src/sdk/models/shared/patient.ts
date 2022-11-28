import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Code } from "./code";
import { FhirAllergy } from "./fhirallergy";
import { FhirCondition } from "./fhircondition";
import { FhirEncounter } from "./fhirencounter";
import { FhirObservation } from "./fhirobservation";
import { FhirPatient } from "./fhirpatient";
import { FhirPractitioner } from "./fhirpractitioner";
import { Group } from "./group";



export class Patient extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Code })
  diagnosisCodes?: Code[];

  @SpeakeasyMetadata({ elemType: FhirAllergy })
  fhirAllergies?: FhirAllergy[];

  @SpeakeasyMetadata({ elemType: FhirCondition })
  fhirConditions?: FhirCondition[];

  @SpeakeasyMetadata({ elemType: FhirEncounter })
  fhirEncounters?: FhirEncounter[];

  @SpeakeasyMetadata({ elemType: FhirObservation })
  fhirObservations?: FhirObservation[];

  @SpeakeasyMetadata()
  fhirPatient?: FhirPatient;

  @SpeakeasyMetadata({ elemType: FhirPractitioner })
  fhirPractitioners?: FhirPractitioner[];

  @SpeakeasyMetadata()
  group?: Group;

  @SpeakeasyMetadata()
  id?: number;
}
