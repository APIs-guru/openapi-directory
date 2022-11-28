import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateConversationMessageServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateConversationMessagePathParams extends SpeakeasyBase {
    conversationSid: string;
    sid: string;
}
export declare class UpdateConversationMessageHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ConversationMessageEnumWebhookEnabledTypeEnum;
}
export declare class UpdateConversationMessageUpdateConversationMessageRequest extends SpeakeasyBase {
    attributes?: string;
    author?: string;
    body?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
}
export declare class UpdateConversationMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateConversationMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateConversationMessagePathParams;
    headers: UpdateConversationMessageHeaders;
    request?: UpdateConversationMessageUpdateConversationMessageRequest;
    security: UpdateConversationMessageSecurity;
}
export declare class UpdateConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConversationConversationMessage?: shared.ConversationsV1ConversationConversationMessage;
}
