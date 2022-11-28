import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateServiceConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateServiceConversationScopedWebhookPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
}
export declare class UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
    configurationFilters?: string[];
    configurationFlowSid?: string;
    configurationMethod?: shared.ServiceConversationScopedWebhookEnumMethodEnum;
    configurationTriggers?: string[];
    configurationUrl?: string;
}
export declare class UpdateServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServiceConversationScopedWebhookPathParams;
    request?: UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest;
    security: UpdateServiceConversationScopedWebhookSecurity;
}
export declare class UpdateServiceConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConversationServiceConversationScopedWebhook?: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
}
