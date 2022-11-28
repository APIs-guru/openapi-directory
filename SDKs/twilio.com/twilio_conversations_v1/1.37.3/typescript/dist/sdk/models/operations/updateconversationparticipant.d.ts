import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateConversationParticipantServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateConversationParticipantPathParams extends SpeakeasyBase {
    conversationSid: string;
    sid: string;
}
export declare class UpdateConversationParticipantHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ConversationParticipantEnumWebhookEnabledTypeEnum;
}
export declare class UpdateConversationParticipantUpdateConversationParticipantRequest extends SpeakeasyBase {
    attributes?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    identity?: string;
    lastReadMessageIndex?: number;
    lastReadTimestamp?: string;
    messagingBindingProjectedAddress?: string;
    messagingBindingProxyAddress?: string;
    roleSid?: string;
}
export declare class UpdateConversationParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateConversationParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateConversationParticipantPathParams;
    headers: UpdateConversationParticipantHeaders;
    request?: UpdateConversationParticipantUpdateConversationParticipantRequest;
    security: UpdateConversationParticipantSecurity;
}
export declare class UpdateConversationParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConversationConversationParticipant?: shared.ConversationsV1ConversationConversationParticipant;
}
