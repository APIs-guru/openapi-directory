import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSERVICECONVERSATIONPARTICIPANT_SERVERS: string[];
export declare class FetchServiceConversationParticipantPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
}
export declare class FetchServiceConversationParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchServiceConversationParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchServiceConversationParticipantPathParams;
    security: FetchServiceConversationParticipantSecurity;
}
export declare class FetchServiceConversationParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConversationServiceConversationParticipant?: shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant;
}
