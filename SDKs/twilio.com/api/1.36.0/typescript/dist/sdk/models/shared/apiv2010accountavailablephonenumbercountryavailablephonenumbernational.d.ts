import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Whether a phone number can receive calls or messages
**/
export declare class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational extends SpeakeasyBase {
    addressRequirements?: string;
    beta?: boolean;
    capabilities?: ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities;
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
