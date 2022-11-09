import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTCONVERSATIONSCOPEDWEBHOOK_SERVERS: string[];
export declare class ListConversationScopedWebhookPathParams extends SpeakeasyBase {
    conversationSid: string;
}
export declare class ListConversationScopedWebhookQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListConversationScopedWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListConversationScopedWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListConversationScopedWebhookPathParams;
    queryParams: ListConversationScopedWebhookQueryParams;
    security: ListConversationScopedWebhookSecurity;
}
export declare class ListConversationScopedWebhookListConversationScopedWebhookResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListConversationScopedWebhookListConversationScopedWebhookResponse extends SpeakeasyBase {
    meta?: ListConversationScopedWebhookListConversationScopedWebhookResponseMeta;
    webhooks?: shared.ConversationsV1ConversationConversationScopedWebhook[];
}
export declare class ListConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    listConversationScopedWebhookResponse?: ListConversationScopedWebhookListConversationScopedWebhookResponse;
    statusCode: number;
}
