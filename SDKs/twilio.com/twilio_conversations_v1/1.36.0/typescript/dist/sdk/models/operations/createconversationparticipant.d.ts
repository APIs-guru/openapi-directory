import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATECONVERSATIONPARTICIPANT_SERVERS: string[];
export declare class CreateConversationParticipantPathParams extends SpeakeasyBase {
    conversationSid: string;
}
export declare class CreateConversationParticipantHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ConversationParticipantEnumWebhookEnabledTypeEnum;
}
export declare class CreateConversationParticipantCreateConversationParticipantRequest extends SpeakeasyBase {
    attributes?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    identity?: string;
    messagingBindingAddress?: string;
    messagingBindingProjectedAddress?: string;
    messagingBindingProxyAddress?: string;
    roleSid?: string;
}
export declare class CreateConversationParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateConversationParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateConversationParticipantPathParams;
    headers: CreateConversationParticipantHeaders;
    request?: CreateConversationParticipantCreateConversationParticipantRequest;
    security: CreateConversationParticipantSecurity;
}
export declare class CreateConversationParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConversationConversationParticipant?: shared.ConversationsV1ConversationConversationParticipant;
}
