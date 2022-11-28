import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchServiceConversationMessageReceiptServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceConversationMessageReceiptPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    messageSid: string;
    sid: string;
}
export declare class FetchServiceConversationMessageReceiptSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchServiceConversationMessageReceiptRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchServiceConversationMessageReceiptPathParams;
    security: FetchServiceConversationMessageReceiptSecurity;
}
export declare class FetchServiceConversationMessageReceiptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt;
}
