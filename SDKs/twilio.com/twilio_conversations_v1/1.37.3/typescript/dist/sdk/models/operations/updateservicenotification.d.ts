import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateServiceNotificationServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateServiceNotificationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class UpdateServiceNotificationUpdateServiceNotificationRequest extends SpeakeasyBase {
    addedToConversationEnabled?: boolean;
    addedToConversationSound?: string;
    addedToConversationTemplate?: string;
    logEnabled?: boolean;
    newMessageBadgeCountEnabled?: boolean;
    newMessageEnabled?: boolean;
    newMessageSound?: string;
    newMessageTemplate?: string;
    newMessageWithMediaEnabled?: boolean;
    newMessageWithMediaTemplate?: string;
    removedFromConversationEnabled?: boolean;
    removedFromConversationSound?: string;
    removedFromConversationTemplate?: string;
}
export declare class UpdateServiceNotificationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceNotificationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServiceNotificationPathParams;
    request?: UpdateServiceNotificationUpdateServiceNotificationRequest;
    security: UpdateServiceNotificationSecurity;
}
export declare class UpdateServiceNotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConfigurationServiceNotification?: shared.ConversationsV1ServiceServiceConfigurationServiceNotification;
}
