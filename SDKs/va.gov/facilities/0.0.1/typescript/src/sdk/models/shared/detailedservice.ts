import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppointmentPhoneNumber } from "./appointmentphonenumber";
import { DetailedServiceLocation } from "./detailedservicelocation";


// DetailedService
/** 
 * Detailed information of a facility service.
**/
export class DetailedService extends SpeakeasyBase {
  @Metadata({ data: "json, name=appointment_leadin" })
  appointmentLeadin?: string;

  @Metadata({ data: "json, name=appointment_phones", elemType: shared.AppointmentPhoneNumber })
  appointmentPhones?: AppointmentPhoneNumber[];

  @Metadata({ data: "json, name=description_facility" })
  descriptionFacility?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=online_scheduling_available" })
  onlineSchedulingAvailable?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=referral_required" })
  referralRequired?: string;

  @Metadata({ data: "json, name=service_locations", elemType: shared.DetailedServiceLocation })
  serviceLocations?: DetailedServiceLocation[];

  @Metadata({ data: "json, name=walk_ins_accepted" })
  walkInsAccepted?: string;
}
