import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchShortCodeServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchShortCodePathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchShortCodeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchShortCodeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchShortCodePathParams;
    security: FetchShortCodeSecurity;
}
export declare class FetchShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1ServiceShortCode?: shared.MessagingV1ServiceShortCode;
}
