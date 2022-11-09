import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FhirCondition } from "./fhircondition";
import { FhirEncounter } from "./fhirencounter";
import { FhirObservation } from "./fhirobservation";
import { FhirPatient } from "./fhirpatient";
import { FhirPractitioner } from "./fhirpractitioner";


export class PatientManagement extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: FhirCondition;

  @Metadata({ data: "json, name=encounters", elemType: shared.FhirEncounter })
  encounters?: FhirEncounter[];

  @Metadata({ data: "json, name=groupCode" })
  groupCode?: string;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=observations", elemType: shared.FhirObservation })
  observations?: FhirObservation[];

  @Metadata({ data: "json, name=patient" })
  patient?: FhirPatient;

  @Metadata({ data: "json, name=practitioners", elemType: shared.FhirPractitioner })
  practitioners?: FhirPractitioner[];
}
