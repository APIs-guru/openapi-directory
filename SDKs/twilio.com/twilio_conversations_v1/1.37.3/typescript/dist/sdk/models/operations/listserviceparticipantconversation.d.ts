import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListServiceParticipantConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class ListServiceParticipantConversationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class ListServiceParticipantConversationQueryParams extends SpeakeasyBase {
    address?: string;
    identity?: string;
    pageSize?: number;
}
export declare class ListServiceParticipantConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListServiceParticipantConversationListServiceParticipantConversationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListServiceParticipantConversationListServiceParticipantConversationResponse extends SpeakeasyBase {
    conversations?: shared.ConversationsV1ServiceServiceParticipantConversation[];
    meta?: ListServiceParticipantConversationListServiceParticipantConversationResponseMeta;
}
export declare class ListServiceParticipantConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListServiceParticipantConversationPathParams;
    queryParams: ListServiceParticipantConversationQueryParams;
    security: ListServiceParticipantConversationSecurity;
}
export declare class ListServiceParticipantConversationResponse extends SpeakeasyBase {
    contentType: string;
    listServiceParticipantConversationResponse?: ListServiceParticipantConversationListServiceParticipantConversationResponse;
    statusCode: number;
}
