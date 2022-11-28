import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListServiceConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class ListServiceConversationScopedWebhookPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
}
export declare class ListServiceConversationScopedWebhookQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse extends SpeakeasyBase {
    meta?: ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta;
    webhooks?: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook[];
}
export declare class ListServiceConversationScopedWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListServiceConversationScopedWebhookPathParams;
    queryParams: ListServiceConversationScopedWebhookQueryParams;
    security: ListServiceConversationScopedWebhookSecurity;
}
export declare class ListServiceConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    listServiceConversationScopedWebhookResponse?: ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse;
    statusCode: number;
}
