import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateServiceConversationMessageServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateServiceConversationMessagePathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
}
export declare class CreateServiceConversationMessageHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum;
}
export declare class CreateServiceConversationMessageCreateServiceConversationMessageRequest extends SpeakeasyBase {
    attributes?: string;
    author?: string;
    body?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    mediaSid?: string;
}
export declare class CreateServiceConversationMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateServiceConversationMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateServiceConversationMessagePathParams;
    headers: CreateServiceConversationMessageHeaders;
    request?: CreateServiceConversationMessageCreateServiceConversationMessageRequest;
    security: CreateServiceConversationMessageSecurity;
}
export declare class CreateServiceConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConversationServiceConversationMessage?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessage;
}
