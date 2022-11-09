import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSYNCSYNCLISTPERMISSION_SERVERS: string[];
export declare class ListSyncSyncListPermissionPathParams extends SpeakeasyBase {
    listSid: string;
    serviceSid: string;
}
export declare class ListSyncSyncListPermissionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSyncSyncListPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncSyncListPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncSyncListPermissionPathParams;
    queryParams: ListSyncSyncListPermissionQueryParams;
    security: ListSyncSyncListPermissionSecurity;
}
export declare class ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncSyncListPermissionListSyncSyncListPermissionResponse extends SpeakeasyBase {
    meta?: ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta;
    permissions?: shared.PreviewSyncServiceSyncListSyncListPermission[];
}
export declare class ListSyncSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    listSyncSyncListPermissionResponse?: ListSyncSyncListPermissionListSyncSyncListPermissionResponse;
    statusCode: number;
}
