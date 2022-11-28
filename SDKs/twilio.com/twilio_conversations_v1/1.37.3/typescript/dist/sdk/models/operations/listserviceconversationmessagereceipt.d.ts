import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListServiceConversationMessageReceiptServerList: readonly ["https://conversations.twilio.com"];
export declare class ListServiceConversationMessageReceiptPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    messageSid: string;
}
export declare class ListServiceConversationMessageReceiptQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListServiceConversationMessageReceiptSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse extends SpeakeasyBase {
    deliveryReceipts?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt[];
    meta?: ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta;
}
export declare class ListServiceConversationMessageReceiptRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListServiceConversationMessageReceiptPathParams;
    queryParams: ListServiceConversationMessageReceiptQueryParams;
    security: ListServiceConversationMessageReceiptSecurity;
}
export declare class ListServiceConversationMessageReceiptResponse extends SpeakeasyBase {
    contentType: string;
    listServiceConversationMessageReceiptResponse?: ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse;
    statusCode: number;
}
