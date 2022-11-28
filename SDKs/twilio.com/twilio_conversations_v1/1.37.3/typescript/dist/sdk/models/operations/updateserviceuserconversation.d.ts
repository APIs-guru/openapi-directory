import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateServiceUserConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateServiceUserConversationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    userSid: string;
}
export declare class UpdateServiceUserConversationUpdateServiceUserConversationRequest extends SpeakeasyBase {
    lastReadMessageIndex?: number;
    lastReadTimestamp?: Date;
    notificationLevel?: shared.ServiceUserConversationEnumNotificationLevelEnum;
}
export declare class UpdateServiceUserConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceUserConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServiceUserConversationPathParams;
    request?: UpdateServiceUserConversationUpdateServiceUserConversationRequest;
    security: UpdateServiceUserConversationSecurity;
}
export declare class UpdateServiceUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceUserServiceUserConversation?: shared.ConversationsV1ServiceServiceUserServiceUserConversation;
}
