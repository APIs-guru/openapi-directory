import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchPhoneNumberServerList: readonly ["https://proxy.twilio.com"];
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
    proxyV1ServicePhoneNumber?: shared.ProxyV1ServicePhoneNumber;
}
