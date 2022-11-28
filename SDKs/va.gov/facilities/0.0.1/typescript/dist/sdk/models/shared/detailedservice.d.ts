import { SpeakeasyBase } from "../../../internal/utils";
import { AppointmentPhoneNumber } from "./appointmentphonenumber";
import { DetailedServiceLocation } from "./detailedservicelocation";
/**
 * Detailed information of a facility service.
**/
export declare class DetailedService extends SpeakeasyBase {
    appointmentLeadin?: string;
    appointmentPhones?: AppointmentPhoneNumber[];
    descriptionFacility?: string;
    name?: string;
    onlineSchedulingAvailable?: string;
    path?: string;
    referralRequired?: string;
    serviceLocations?: DetailedServiceLocation[];
    walkInsAccepted?: string;
}
