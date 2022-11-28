import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FhirCondition } from "./fhircondition";
import { FhirEncounter } from "./fhirencounter";
import { FhirObservation } from "./fhirobservation";
import { FhirPatient } from "./fhirpatient";
import { FhirPractitioner } from "./fhirpractitioner";



export class PatientManagement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: FhirCondition;

  @SpeakeasyMetadata({ data: "json, name=encounters", elemType: FhirEncounter })
  encounters?: FhirEncounter[];

  @SpeakeasyMetadata({ data: "json, name=groupCode" })
  groupCode?: string;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=observations", elemType: FhirObservation })
  observations?: FhirObservation[];

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient?: FhirPatient;

  @SpeakeasyMetadata({ data: "json, name=practitioners", elemType: FhirPractitioner })
  practitioners?: FhirPractitioner[];
}
