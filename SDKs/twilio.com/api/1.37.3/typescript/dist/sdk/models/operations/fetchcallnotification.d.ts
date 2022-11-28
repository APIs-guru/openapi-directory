import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchCallNotificationServerList: readonly ["https://api.twilio.com"];
export declare class FetchCallNotificationPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
    sid: string;
}
export declare class FetchCallNotificationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCallNotificationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCallNotificationPathParams;
    security: FetchCallNotificationSecurity;
}
export declare class FetchCallNotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallCallNotificationInstance?: shared.ApiV2010AccountCallCallNotificationInstance;
}
