import { SpeakeasyBase } from "../../../internal/utils/utils";
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
    latitude?: string;
    locality?: string;
    longitude?: string;
    phoneNumber?: string;
    postalCode?: string;
    rateCenter?: string;
    region?: string;
}
