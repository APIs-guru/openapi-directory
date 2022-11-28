import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class ListConversationQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListConversationListConversationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListConversationListConversationResponse extends SpeakeasyBase {
    conversations?: shared.ConversationsV1Conversation[];
    meta?: ListConversationListConversationResponseMeta;
}
export declare class ListConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListConversationQueryParams;
    security: ListConversationSecurity;
}
export declare class ListConversationResponse extends SpeakeasyBase {
    contentType: string;
    listConversationResponse?: ListConversationListConversationResponse;
    statusCode: number;
}
