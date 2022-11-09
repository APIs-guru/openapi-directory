import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSERVICEUSERCONVERSATION_SERVERS: string[];
export declare class ListServiceUserConversationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    userSid: string;
}
export declare class ListServiceUserConversationQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListServiceUserConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListServiceUserConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListServiceUserConversationPathParams;
    queryParams: ListServiceUserConversationQueryParams;
    security: ListServiceUserConversationSecurity;
}
export declare class ListServiceUserConversationListServiceUserConversationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListServiceUserConversationListServiceUserConversationResponse extends SpeakeasyBase {
    conversations?: shared.ConversationsV1ServiceServiceUserServiceUserConversation[];
    meta?: ListServiceUserConversationListServiceUserConversationResponseMeta;
}
export declare class ListServiceUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    listServiceUserConversationResponse?: ListServiceUserConversationListServiceUserConversationResponse;
    statusCode: number;
}
