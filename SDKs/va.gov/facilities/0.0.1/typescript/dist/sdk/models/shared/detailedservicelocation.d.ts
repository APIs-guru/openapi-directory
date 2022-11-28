import { SpeakeasyBase } from "../../../internal/utils";
import { AppointmentPhoneNumber } from "./appointmentphonenumber";
import { DetailedServiceEmailContact } from "./detailedserviceemailcontact";
import { DetailedServiceHours } from "./detailedservicehours";
import { DetailedServiceAddress } from "./detailedserviceaddress";
/**
 * Details for a location offering a service.
**/
export declare class DetailedServiceLocation extends SpeakeasyBase {
    additionalHoursInfo?: string;
    appointmentPhones?: AppointmentPhoneNumber[];
    emailContacts?: DetailedServiceEmailContact[];
    facilityServiceHours?: DetailedServiceHours;
    serviceLocationAddress?: DetailedServiceAddress;
}
