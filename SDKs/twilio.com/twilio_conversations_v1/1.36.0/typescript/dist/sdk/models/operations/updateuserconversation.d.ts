import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEUSERCONVERSATION_SERVERS: string[];
export declare class UpdateUserConversationPathParams extends SpeakeasyBase {
    conversationSid: string;
    userSid: string;
}
export declare class UpdateUserConversationUpdateUserConversationRequest extends SpeakeasyBase {
    lastReadMessageIndex?: number;
    lastReadTimestamp?: Date;
    notificationLevel?: shared.UserConversationEnumNotificationLevelEnum;
}
export declare class UpdateUserConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUserConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUserConversationPathParams;
    request?: UpdateUserConversationUpdateUserConversationRequest;
    security: UpdateUserConversationSecurity;
}
export declare class UpdateUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1UserUserConversation?: shared.ConversationsV1UserUserConversation;
}
