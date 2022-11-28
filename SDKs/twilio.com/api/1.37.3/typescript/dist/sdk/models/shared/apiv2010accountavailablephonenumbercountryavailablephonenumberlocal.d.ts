import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether a phone number can receive calls or messages
**/
export declare class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocalCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal extends SpeakeasyBase {
    addressRequirements?: string;
    beta?: boolean;
    capabilities?: ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocalCapabilities;
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
