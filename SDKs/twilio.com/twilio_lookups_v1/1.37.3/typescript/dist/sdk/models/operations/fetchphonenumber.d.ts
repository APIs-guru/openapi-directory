import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchPhoneNumberServerList: readonly ["https://lookups.twilio.com"];
export declare class FetchPhoneNumberPathParams extends SpeakeasyBase {
    phoneNumber: string;
}
export declare class FetchPhoneNumberQueryParams extends SpeakeasyBase {
    addOns?: string[];
    addOnsData?: Map<string, any>;
    countryCode?: string;
    type?: string[];
}
export declare class FetchPhoneNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchPhoneNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchPhoneNumberPathParams;
    queryParams: FetchPhoneNumberQueryParams;
    security: FetchPhoneNumberSecurity;
}
export declare class FetchPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    lookupsV1PhoneNumber?: shared.LookupsV1PhoneNumber;
}
