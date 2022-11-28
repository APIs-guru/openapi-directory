import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatientSatisfaction } from "./patientsatisfaction";



export class Satisfaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effective_date" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: PatientSatisfaction;
}
