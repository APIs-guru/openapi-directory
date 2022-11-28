import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchServiceConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceConversationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    sid: string;
}
export declare class FetchServiceConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchServiceConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchServiceConversationPathParams;
    security: FetchServiceConversationSecurity;
}
export declare class FetchServiceConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConversation?: shared.ConversationsV1ServiceServiceConversation;
}
