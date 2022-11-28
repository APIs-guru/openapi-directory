import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppointmentPhoneNumber } from "./appointmentphonenumber";
import { DetailedServiceEmailContact } from "./detailedserviceemailcontact";
import { DetailedServiceHours } from "./detailedservicehours";
import { DetailedServiceAddress } from "./detailedserviceaddress";



// DetailedServiceLocation
/** 
 * Details for a location offering a service.
**/
export class DetailedServiceLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional_hours_info" })
  additionalHoursInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=appointment_phones", elemType: AppointmentPhoneNumber })
  appointmentPhones?: AppointmentPhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=email_contacts", elemType: DetailedServiceEmailContact })
  emailContacts?: DetailedServiceEmailContact[];

  @SpeakeasyMetadata({ data: "json, name=facility_service_hours" })
  facilityServiceHours?: DetailedServiceHours;

  @SpeakeasyMetadata({ data: "json, name=service_location_address" })
  serviceLocationAddress?: DetailedServiceAddress;
}
