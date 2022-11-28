import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppointmentPhoneNumber
/** 
 * Phone number information for scheduling an appointment.
**/
export class AppointmentPhoneNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
