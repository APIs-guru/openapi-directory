import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHNOTIFICATION_SERVERS: string[];
export declare class FetchNotificationPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchNotificationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchNotificationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchNotificationPathParams;
    security: FetchNotificationSecurity;
}
export declare class FetchNotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountNotificationInstance?: shared.ApiV2010AccountNotificationInstance;
}
