import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSERVICECONVERSATIONMESSAGE_SERVERS: string[];
export declare class FetchServiceConversationMessagePathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
}
export declare class FetchServiceConversationMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchServiceConversationMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchServiceConversationMessagePathParams;
    security: FetchServiceConversationMessageSecurity;
}
export declare class FetchServiceConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConversationServiceConversationMessage?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessage;
}
