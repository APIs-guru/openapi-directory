import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSyncListPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class ListSyncListPermissionPathParams extends SpeakeasyBase {
    listSid: string;
    serviceSid: string;
}
export declare class ListSyncListPermissionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSyncListPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncListPermissionListSyncListPermissionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncListPermissionListSyncListPermissionResponse extends SpeakeasyBase {
    meta?: ListSyncListPermissionListSyncListPermissionResponseMeta;
    permissions?: shared.SyncV1ServiceSyncListSyncListPermission[];
}
export declare class ListSyncListPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncListPermissionPathParams;
    queryParams: ListSyncListPermissionQueryParams;
    security: ListSyncListPermissionSecurity;
}
export declare class ListSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    listSyncListPermissionResponse?: ListSyncListPermissionListSyncListPermissionResponse;
    statusCode: number;
}
