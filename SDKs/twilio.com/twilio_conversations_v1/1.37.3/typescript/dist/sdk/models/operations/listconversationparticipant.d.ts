import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListConversationParticipantServerList: readonly ["https://conversations.twilio.com"];
export declare class ListConversationParticipantPathParams extends SpeakeasyBase {
    conversationSid: string;
}
export declare class ListConversationParticipantQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListConversationParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListConversationParticipantListConversationParticipantResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListConversationParticipantListConversationParticipantResponse extends SpeakeasyBase {
    meta?: ListConversationParticipantListConversationParticipantResponseMeta;
    participants?: shared.ConversationsV1ConversationConversationParticipant[];
}
export declare class ListConversationParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListConversationParticipantPathParams;
    queryParams: ListConversationParticipantQueryParams;
    security: ListConversationParticipantSecurity;
}
export declare class ListConversationParticipantResponse extends SpeakeasyBase {
    contentType: string;
    listConversationParticipantResponse?: ListConversationParticipantListConversationParticipantResponse;
    statusCode: number;
}
