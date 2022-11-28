import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Phone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=after_hours" })
  afterHours?: string;

  @SpeakeasyMetadata({ data: "json, name=enrollment_coordinator" })
  enrollmentCoordinator?: string;

  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: string;

  @SpeakeasyMetadata({ data: "json, name=main" })
  main?: string;

  @SpeakeasyMetadata({ data: "json, name=mental_health_clinic" })
  mentalHealthClinic?: string;

  @SpeakeasyMetadata({ data: "json, name=patient_advocate" })
  patientAdvocate?: string;

  @SpeakeasyMetadata({ data: "json, name=pharmacy" })
  pharmacy?: string;
}
