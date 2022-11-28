import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchConversationPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchConversationPathParams;
    security: FetchConversationSecurity;
}
export declare class FetchConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1Conversation?: shared.ConversationsV1Conversation;
}
