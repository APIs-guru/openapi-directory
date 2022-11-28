import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchServiceNotificationServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceNotificationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class FetchServiceNotificationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchServiceNotificationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchServiceNotificationPathParams;
    security: FetchServiceNotificationSecurity;
}
export declare class FetchServiceNotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConfigurationServiceNotification?: shared.ConversationsV1ServiceServiceConfigurationServiceNotification;
}
