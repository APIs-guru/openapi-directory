import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchIncomingPhoneNumberServerList: readonly ["https://api.twilio.com"];
export declare class FetchIncomingPhoneNumberPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchIncomingPhoneNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchIncomingPhoneNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchIncomingPhoneNumberPathParams;
    security: FetchIncomingPhoneNumberSecurity;
}
export declare class FetchIncomingPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountIncomingPhoneNumber?: shared.ApiV2010AccountIncomingPhoneNumber;
}
