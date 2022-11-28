import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateConversationScopedWebhookPathParams extends SpeakeasyBase {
    conversationSid: string;
    sid: string;
}
export declare class UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest extends SpeakeasyBase {
    configurationFilters?: string[];
    configurationFlowSid?: string;
    configurationMethod?: shared.ConversationScopedWebhookEnumMethodEnum;
    configurationTriggers?: string[];
    configurationUrl?: string;
}
export declare class UpdateConversationScopedWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateConversationScopedWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateConversationScopedWebhookPathParams;
    request?: UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest;
    security: UpdateConversationScopedWebhookSecurity;
}
export declare class UpdateConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConversationConversationScopedWebhook?: shared.ConversationsV1ConversationConversationScopedWebhook;
}
