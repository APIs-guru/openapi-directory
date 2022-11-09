import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSERVICEROLE_SERVERS: string[];
export declare class ListServiceRolePathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class ListServiceRoleQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListServiceRoleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListServiceRoleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListServiceRolePathParams;
    queryParams: ListServiceRoleQueryParams;
    security: ListServiceRoleSecurity;
}
export declare class ListServiceRoleListServiceRoleResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListServiceRoleListServiceRoleResponse extends SpeakeasyBase {
    meta?: ListServiceRoleListServiceRoleResponseMeta;
    roles?: shared.ConversationsV1ServiceServiceRole[];
}
export declare class ListServiceRoleResponse extends SpeakeasyBase {
    contentType: string;
    listServiceRoleResponse?: ListServiceRoleListServiceRoleResponse;
    statusCode: number;
}
