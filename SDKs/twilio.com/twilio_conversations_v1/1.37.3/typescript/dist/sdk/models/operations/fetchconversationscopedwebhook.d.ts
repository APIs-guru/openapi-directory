import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchConversationScopedWebhookPathParams extends SpeakeasyBase {
    conversationSid: string;
    sid: string;
}
export declare class FetchConversationScopedWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConversationScopedWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchConversationScopedWebhookPathParams;
    security: FetchConversationScopedWebhookSecurity;
}
export declare class FetchConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConversationConversationScopedWebhook?: shared.ConversationsV1ConversationConversationScopedWebhook;
}
