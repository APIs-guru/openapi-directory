import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCONVERSATION_SERVERS: string[];
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
