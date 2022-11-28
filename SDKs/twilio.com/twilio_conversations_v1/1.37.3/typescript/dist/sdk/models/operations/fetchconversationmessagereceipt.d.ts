import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchConversationMessageReceiptServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchConversationMessageReceiptPathParams extends SpeakeasyBase {
    conversationSid: string;
    messageSid: string;
    sid: string;
}
export declare class FetchConversationMessageReceiptSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConversationMessageReceiptRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchConversationMessageReceiptPathParams;
    security: FetchConversationMessageReceiptSecurity;
}
export declare class FetchConversationMessageReceiptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConversationConversationMessageConversationMessageReceipt?: shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt;
}
