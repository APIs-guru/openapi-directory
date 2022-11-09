import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppointmentPhoneNumber
/** 
 * Phone number information for scheduling an appointment.
**/
export class AppointmentPhoneNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=extension" })
  extension?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
