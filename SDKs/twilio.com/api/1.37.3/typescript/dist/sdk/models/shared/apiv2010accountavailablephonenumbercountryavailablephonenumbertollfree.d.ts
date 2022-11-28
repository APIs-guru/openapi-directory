import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether a phone number can receive calls or messages
**/
export declare class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree extends SpeakeasyBase {
    addressRequirements?: string;
    beta?: boolean;
    capabilities?: ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities;
    friendlyName?: string;
    isoCountry?: string;
    lata?: string;
    latitude?: number;
    locality?: string;
    longitude?: number;
    phoneNumber?: string;
    postalCode?: string;
    rateCenter?: string;
    region?: string;
}
