import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSERVICEUSER_SERVERS: string[];
export declare class ListServiceUserPathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class ListServiceUserQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListServiceUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListServiceUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListServiceUserPathParams;
    queryParams: ListServiceUserQueryParams;
    security: ListServiceUserSecurity;
}
export declare class ListServiceUserListServiceUserResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListServiceUserListServiceUserResponse extends SpeakeasyBase {
    meta?: ListServiceUserListServiceUserResponseMeta;
    users?: shared.ConversationsV1ServiceServiceUser[];
}
export declare class ListServiceUserResponse extends SpeakeasyBase {
    contentType: string;
    listServiceUserResponse?: ListServiceUserListServiceUserResponse;
    statusCode: number;
}
