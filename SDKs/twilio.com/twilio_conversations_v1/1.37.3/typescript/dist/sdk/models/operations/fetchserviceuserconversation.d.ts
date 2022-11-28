import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchServiceUserConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceUserConversationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    userSid: string;
}
export declare class FetchServiceUserConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchServiceUserConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchServiceUserConversationPathParams;
    security: FetchServiceUserConversationSecurity;
}
export declare class FetchServiceUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceUserServiceUserConversation?: shared.ConversationsV1ServiceServiceUserServiceUserConversation;
}
