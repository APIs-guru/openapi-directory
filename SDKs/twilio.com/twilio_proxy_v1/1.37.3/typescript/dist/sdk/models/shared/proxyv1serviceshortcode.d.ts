import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The capabilities of the short code
**/
export declare class ProxyV1ServiceShortCodeCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare class ProxyV1ServiceShortCode extends SpeakeasyBase {
    accountSid?: string;
    capabilities?: ProxyV1ServiceShortCodeCapabilities;
    dateCreated?: Date;
    dateUpdated?: Date;
    isReserved?: boolean;
    isoCountry?: string;
    serviceSid?: string;
    shortCode?: string;
    sid?: string;
    url?: string;
}
