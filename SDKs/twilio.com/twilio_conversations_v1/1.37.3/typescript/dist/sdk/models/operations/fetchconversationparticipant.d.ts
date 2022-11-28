import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchConversationParticipantServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchConversationParticipantPathParams extends SpeakeasyBase {
    conversationSid: string;
    sid: string;
}
export declare class FetchConversationParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConversationParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchConversationParticipantPathParams;
    security: FetchConversationParticipantSecurity;
}
export declare class FetchConversationParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConversationConversationParticipant?: shared.ConversationsV1ConversationConversationParticipant;
}
