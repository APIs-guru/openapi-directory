import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTCONVERSATIONMESSAGERECEIPT_SERVERS: string[];
export declare class ListConversationMessageReceiptPathParams extends SpeakeasyBase {
    conversationSid: string;
    messageSid: string;
}
export declare class ListConversationMessageReceiptQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListConversationMessageReceiptSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListConversationMessageReceiptRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListConversationMessageReceiptPathParams;
    queryParams: ListConversationMessageReceiptQueryParams;
    security: ListConversationMessageReceiptSecurity;
}
export declare class ListConversationMessageReceiptListConversationMessageReceiptResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListConversationMessageReceiptListConversationMessageReceiptResponse extends SpeakeasyBase {
    deliveryReceipts?: shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt[];
    meta?: ListConversationMessageReceiptListConversationMessageReceiptResponseMeta;
}
export declare class ListConversationMessageReceiptResponse extends SpeakeasyBase {
    contentType: string;
    listConversationMessageReceiptResponse?: ListConversationMessageReceiptListConversationMessageReceiptResponse;
    statusCode: number;
}
