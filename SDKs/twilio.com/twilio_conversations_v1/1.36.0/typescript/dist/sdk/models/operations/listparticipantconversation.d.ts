import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTPARTICIPANTCONVERSATION_SERVERS: string[];
export declare class ListParticipantConversationQueryParams extends SpeakeasyBase {
    address?: string;
    identity?: string;
    pageSize?: number;
}
export declare class ListParticipantConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListParticipantConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListParticipantConversationQueryParams;
    security: ListParticipantConversationSecurity;
}
export declare class ListParticipantConversationListParticipantConversationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListParticipantConversationListParticipantConversationResponse extends SpeakeasyBase {
    conversations?: shared.ConversationsV1ParticipantConversation[];
    meta?: ListParticipantConversationListParticipantConversationResponseMeta;
}
export declare class ListParticipantConversationResponse extends SpeakeasyBase {
    contentType: string;
    listParticipantConversationResponse?: ListParticipantConversationListParticipantConversationResponse;
    statusCode: number;
}
