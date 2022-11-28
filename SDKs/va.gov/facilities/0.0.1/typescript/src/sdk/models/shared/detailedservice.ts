import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppointmentPhoneNumber } from "./appointmentphonenumber";
import { DetailedServiceLocation } from "./detailedservicelocation";



// DetailedService
/** 
 * Detailed information of a facility service.
**/
export class DetailedService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appointment_leadin" })
  appointmentLeadin?: string;

  @SpeakeasyMetadata({ data: "json, name=appointment_phones", elemType: AppointmentPhoneNumber })
  appointmentPhones?: AppointmentPhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=description_facility" })
  descriptionFacility?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=online_scheduling_available" })
  onlineSchedulingAvailable?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=referral_required" })
  referralRequired?: string;

  @SpeakeasyMetadata({ data: "json, name=service_locations", elemType: DetailedServiceLocation })
  serviceLocations?: DetailedServiceLocation[];

  @SpeakeasyMetadata({ data: "json, name=walk_ins_accepted" })
  walkInsAccepted?: string;
}
