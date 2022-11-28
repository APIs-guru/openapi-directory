import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateServiceConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateServiceConversationScopedWebhookPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
}
export declare class CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
    configurationFilters?: string[];
    configurationFlowSid?: string;
    configurationMethod?: shared.ServiceConversationScopedWebhookEnumMethodEnum;
    configurationReplayAfter?: number;
    configurationTriggers?: string[];
    configurationUrl?: string;
    target: shared.ServiceConversationScopedWebhookEnumTargetEnum;
}
export declare class CreateServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateServiceConversationScopedWebhookPathParams;
    request?: CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest;
    security: CreateServiceConversationScopedWebhookSecurity;
}
export declare class CreateServiceConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConversationServiceConversationScopedWebhook?: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
}
