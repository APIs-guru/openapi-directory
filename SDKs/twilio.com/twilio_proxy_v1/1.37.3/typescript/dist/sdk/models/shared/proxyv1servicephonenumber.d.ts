import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The capabilities of the phone number
**/
export declare class ProxyV1ServicePhoneNumberCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare class ProxyV1ServicePhoneNumber extends SpeakeasyBase {
    accountSid?: string;
    capabilities?: ProxyV1ServicePhoneNumberCapabilities;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    inUse?: number;
    isReserved?: boolean;
    isoCountry?: string;
    phoneNumber?: string;
    serviceSid?: string;
    sid?: string;
    url?: string;
}
