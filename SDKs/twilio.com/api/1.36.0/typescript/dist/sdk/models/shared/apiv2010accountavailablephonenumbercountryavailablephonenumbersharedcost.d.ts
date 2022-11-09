import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Whether a phone number can receive calls or messages
**/
export declare class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCostCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost extends SpeakeasyBase {
    addressRequirements?: string;
    beta?: boolean;
    capabilities?: ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCostCapabilities;
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
