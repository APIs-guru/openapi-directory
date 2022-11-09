import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHPHONENUMBER_SERVERS: string[];
export declare class FetchPhoneNumberPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchPhoneNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchPhoneNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchPhoneNumberPathParams;
    security: FetchPhoneNumberSecurity;
}
export declare class FetchPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1ServicePhoneNumber?: shared.MessagingV1ServicePhoneNumber;
}
