import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateServiceConversationMessageServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateServiceConversationMessagePathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
}
export declare class UpdateServiceConversationMessageHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum;
}
export declare class UpdateServiceConversationMessageUpdateServiceConversationMessageRequest extends SpeakeasyBase {
    attributes?: string;
    author?: string;
    body?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
}
export declare class UpdateServiceConversationMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceConversationMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServiceConversationMessagePathParams;
    headers: UpdateServiceConversationMessageHeaders;
    request?: UpdateServiceConversationMessageUpdateServiceConversationMessageRequest;
    security: UpdateServiceConversationMessageSecurity;
}
export declare class UpdateServiceConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConversationServiceConversationMessage?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessage;
}
