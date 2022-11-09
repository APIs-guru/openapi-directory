import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTROLE_SERVERS: string[];
export declare class ListRoleQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListRoleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRoleRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListRoleQueryParams;
    security: ListRoleSecurity;
}
export declare class ListRoleListRoleResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListRoleListRoleResponse extends SpeakeasyBase {
    meta?: ListRoleListRoleResponseMeta;
    roles?: shared.ConversationsV1Role[];
}
export declare class ListRoleResponse extends SpeakeasyBase {
    contentType: string;
    listRoleResponse?: ListRoleListRoleResponse;
    statusCode: number;
}
