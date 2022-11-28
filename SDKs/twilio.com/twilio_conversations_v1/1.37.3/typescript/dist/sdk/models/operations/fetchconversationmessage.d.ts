import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchConversationMessageServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchConversationMessagePathParams extends SpeakeasyBase {
    conversationSid: string;
    sid: string;
}
export declare class FetchConversationMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConversationMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchConversationMessagePathParams;
    security: FetchConversationMessageSecurity;
}
export declare class FetchConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConversationConversationMessage?: shared.ConversationsV1ConversationConversationMessage;
}
