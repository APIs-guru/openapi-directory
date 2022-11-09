import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESERVICECONVERSATIONPARTICIPANT_SERVERS: string[];
export declare class UpdateServiceConversationParticipantPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
}
export declare class UpdateServiceConversationParticipantHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum;
}
export declare class UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest extends SpeakeasyBase {
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
export declare class UpdateServiceConversationParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceConversationParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServiceConversationParticipantPathParams;
    headers: UpdateServiceConversationParticipantHeaders;
    request?: UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest;
    security: UpdateServiceConversationParticipantSecurity;
}
export declare class UpdateServiceConversationParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConversationServiceConversationParticipant?: shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant;
}
