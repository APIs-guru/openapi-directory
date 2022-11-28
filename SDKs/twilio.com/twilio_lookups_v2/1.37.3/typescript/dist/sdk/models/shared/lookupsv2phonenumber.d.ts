import { SpeakeasyBase } from "../../../internal/utils";
import { PhoneNumberEnumValidationErrorEnum } from "./phonenumberenumvalidationerrorenum";
export declare class LookupsV2PhoneNumber extends SpeakeasyBase {
    callForwarding?: any;
    callerName?: any;
    callingCountryCode?: string;
    countryCode?: string;
    lineTypeIntelligence?: any;
    liveActivity?: any;
    nationalFormat?: string;
    phoneNumber?: string;
    simSwap?: any;
    url?: string;
    valid?: boolean;
    validationErrors?: PhoneNumberEnumValidationErrorEnum[];
}
