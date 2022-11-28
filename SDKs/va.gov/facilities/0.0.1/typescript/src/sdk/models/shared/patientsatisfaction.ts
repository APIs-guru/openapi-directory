import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PatientSatisfaction
/** 
 * Veteran-reported satisfaction scores for health care services
**/
export class PatientSatisfaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary_care_routine" })
  primaryCareRoutine?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_care_urgent" })
  primaryCareUrgent?: number;

  @SpeakeasyMetadata({ data: "json, name=specialty_care_routine" })
  specialtyCareRoutine?: number;

  @SpeakeasyMetadata({ data: "json, name=specialty_care_urgent" })
  specialtyCareUrgent?: number;
}
