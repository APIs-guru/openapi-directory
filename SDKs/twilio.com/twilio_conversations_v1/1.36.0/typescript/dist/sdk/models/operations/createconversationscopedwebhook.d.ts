import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATECONVERSATIONSCOPEDWEBHOOK_SERVERS: string[];
export declare class CreateConversationScopedWebhookPathParams extends SpeakeasyBase {
    conversationSid: string;
}
export declare class CreateConversationScopedWebhookCreateConversationScopedWebhookRequest extends SpeakeasyBase {
    configurationFilters?: string[];
    configurationFlowSid?: string;
    configurationMethod?: shared.ConversationScopedWebhookEnumMethodEnum;
    configurationReplayAfter?: number;
    configurationTriggers?: string[];
    configurationUrl?: string;
    target: shared.ConversationScopedWebhookEnumTargetEnum;
}
export declare class CreateConversationScopedWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateConversationScopedWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateConversationScopedWebhookPathParams;
    request?: CreateConversationScopedWebhookCreateConversationScopedWebhookRequest;
    security: CreateConversationScopedWebhookSecurity;
}
export declare class CreateConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConversationConversationScopedWebhook?: shared.ConversationsV1ConversationConversationScopedWebhook;
}
