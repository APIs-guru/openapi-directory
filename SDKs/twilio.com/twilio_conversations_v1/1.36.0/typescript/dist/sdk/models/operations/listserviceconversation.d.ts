import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSERVICECONVERSATION_SERVERS: string[];
export declare class ListServiceConversationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class ListServiceConversationQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListServiceConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListServiceConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListServiceConversationPathParams;
    queryParams: ListServiceConversationQueryParams;
    security: ListServiceConversationSecurity;
}
export declare class ListServiceConversationListServiceConversationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListServiceConversationListServiceConversationResponse extends SpeakeasyBase {
    conversations?: shared.ConversationsV1ServiceServiceConversation[];
    meta?: ListServiceConversationListServiceConversationResponseMeta;
}
export declare class ListServiceConversationResponse extends SpeakeasyBase {
    contentType: string;
    listServiceConversationResponse?: ListServiceConversationListServiceConversationResponse;
    statusCode: number;
}
