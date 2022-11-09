import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCONVERSATIONMESSAGE_SERVERS: string[];
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
