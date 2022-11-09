import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Phone extends SpeakeasyBase {
  @Metadata({ data: "json, name=after_hours" })
  afterHours?: string;

  @Metadata({ data: "json, name=enrollment_coordinator" })
  enrollmentCoordinator?: string;

  @Metadata({ data: "json, name=fax" })
  fax?: string;

  @Metadata({ data: "json, name=main" })
  main?: string;

  @Metadata({ data: "json, name=mental_health_clinic" })
  mentalHealthClinic?: string;

  @Metadata({ data: "json, name=patient_advocate" })
  patientAdvocate?: string;

  @Metadata({ data: "json, name=pharmacy" })
  pharmacy?: string;
}
