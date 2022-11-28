import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListConversationMessageServerList: readonly ["https://conversations.twilio.com"];
export declare class ListConversationMessagePathParams extends SpeakeasyBase {
    conversationSid: string;
}
export declare class ListConversationMessageQueryParams extends SpeakeasyBase {
    order?: shared.ConversationMessageEnumOrderTypeEnum;
    pageSize?: number;
}
export declare class ListConversationMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListConversationMessageListConversationMessageResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListConversationMessageListConversationMessageResponse extends SpeakeasyBase {
    messages?: shared.ConversationsV1ConversationConversationMessage[];
    meta?: ListConversationMessageListConversationMessageResponseMeta;
}
export declare class ListConversationMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListConversationMessagePathParams;
    queryParams: ListConversationMessageQueryParams;
    security: ListConversationMessageSecurity;
}
export declare class ListConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    listConversationMessageResponse?: ListConversationMessageListConversationMessageResponse;
    statusCode: number;
}
