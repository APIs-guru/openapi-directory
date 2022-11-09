import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppointmentPhoneNumber } from "./appointmentphonenumber";
import { DetailedServiceEmailContact } from "./detailedserviceemailcontact";
import { DetailedServiceHours } from "./detailedservicehours";
import { DetailedServiceAddress } from "./detailedserviceaddress";


// DetailedServiceLocation
/** 
 * Details for a location offering a service.
**/
export class DetailedServiceLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=additional_hours_info" })
  additionalHoursInfo?: string;

  @Metadata({ data: "json, name=appointment_phones", elemType: shared.AppointmentPhoneNumber })
  appointmentPhones?: AppointmentPhoneNumber[];

  @Metadata({ data: "json, name=email_contacts", elemType: shared.DetailedServiceEmailContact })
  emailContacts?: DetailedServiceEmailContact[];

  @Metadata({ data: "json, name=facility_service_hours" })
  facilityServiceHours?: DetailedServiceHours;

  @Metadata({ data: "json, name=service_location_address" })
  serviceLocationAddress?: DetailedServiceAddress;
}
