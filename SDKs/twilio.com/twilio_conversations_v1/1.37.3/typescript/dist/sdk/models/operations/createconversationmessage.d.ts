import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateConversationMessageServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateConversationMessagePathParams extends SpeakeasyBase {
    conversationSid: string;
}
export declare class CreateConversationMessageHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ConversationMessageEnumWebhookEnabledTypeEnum;
}
export declare class CreateConversationMessageCreateConversationMessageRequest extends SpeakeasyBase {
    attributes?: string;
    author?: string;
    body?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    mediaSid?: string;
}
export declare class CreateConversationMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateConversationMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateConversationMessagePathParams;
    headers: CreateConversationMessageHeaders;
    request?: CreateConversationMessageCreateConversationMessageRequest;
    security: CreateConversationMessageSecurity;
}
export declare class CreateConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConversationConversationMessage?: shared.ConversationsV1ConversationConversationMessage;
}
