import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListServiceConversationParticipantServerList: readonly ["https://conversations.twilio.com"];
export declare class ListServiceConversationParticipantPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
}
export declare class ListServiceConversationParticipantQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListServiceConversationParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListServiceConversationParticipantListServiceConversationParticipantResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListServiceConversationParticipantListServiceConversationParticipantResponse extends SpeakeasyBase {
    meta?: ListServiceConversationParticipantListServiceConversationParticipantResponseMeta;
    participants?: shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant[];
}
export declare class ListServiceConversationParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListServiceConversationParticipantPathParams;
    queryParams: ListServiceConversationParticipantQueryParams;
    security: ListServiceConversationParticipantSecurity;
}
export declare class ListServiceConversationParticipantResponse extends SpeakeasyBase {
    contentType: string;
    listServiceConversationParticipantResponse?: ListServiceConversationParticipantListServiceConversationParticipantResponse;
    statusCode: number;
}
