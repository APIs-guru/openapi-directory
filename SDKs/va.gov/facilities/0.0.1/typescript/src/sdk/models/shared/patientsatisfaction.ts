import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PatientSatisfaction
/** 
 * Veteran-reported satisfaction scores for health care services
**/
export class PatientSatisfaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary_care_routine" })
  primaryCareRoutine?: number;

  @Metadata({ data: "json, name=primary_care_urgent" })
  primaryCareUrgent?: number;

  @Metadata({ data: "json, name=specialty_care_routine" })
  specialtyCareRoutine?: number;

  @Metadata({ data: "json, name=specialty_care_urgent" })
  specialtyCareUrgent?: number;
}
