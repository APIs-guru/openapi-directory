import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchServiceConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceConversationScopedWebhookPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
}
export declare class FetchServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchServiceConversationScopedWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchServiceConversationScopedWebhookPathParams;
    security: FetchServiceConversationScopedWebhookSecurity;
}
export declare class FetchServiceConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConversationServiceConversationScopedWebhook?: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
}
