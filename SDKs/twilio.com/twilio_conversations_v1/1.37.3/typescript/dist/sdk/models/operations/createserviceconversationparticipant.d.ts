import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateServiceConversationParticipantServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateServiceConversationParticipantPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
}
export declare class CreateServiceConversationParticipantHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum;
}
export declare class CreateServiceConversationParticipantCreateServiceConversationParticipantRequest extends SpeakeasyBase {
    attributes?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    identity?: string;
    messagingBindingAddress?: string;
    messagingBindingProjectedAddress?: string;
    messagingBindingProxyAddress?: string;
    roleSid?: string;
}
export declare class CreateServiceConversationParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateServiceConversationParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateServiceConversationParticipantPathParams;
    headers: CreateServiceConversationParticipantHeaders;
    request?: CreateServiceConversationParticipantCreateServiceConversationParticipantRequest;
    security: CreateServiceConversationParticipantSecurity;
}
export declare class CreateServiceConversationParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConversationServiceConversationParticipant?: shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant;
}
