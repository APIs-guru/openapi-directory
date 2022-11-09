import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatientSatisfaction } from "./patientsatisfaction";


export class Satisfaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=effective_date" })
  effectiveDate?: Date;

  @Metadata({ data: "json, name=health" })
  health?: PatientSatisfaction;
}
