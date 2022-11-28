import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUserConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchUserConversationPathParams extends SpeakeasyBase {
    conversationSid: string;
    userSid: string;
}
export declare class FetchUserConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUserConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUserConversationPathParams;
    security: FetchUserConversationSecurity;
}
export declare class FetchUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1UserUserConversation?: shared.ConversationsV1UserUserConversation;
}
