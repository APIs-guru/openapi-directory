import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSYNCDOCUMENTPERMISSION_SERVERS: string[];
export declare class ListSyncDocumentPermissionPathParams extends SpeakeasyBase {
    documentSid: string;
    serviceSid: string;
}
export declare class ListSyncDocumentPermissionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSyncDocumentPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncDocumentPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncDocumentPermissionPathParams;
    queryParams: ListSyncDocumentPermissionQueryParams;
    security: ListSyncDocumentPermissionSecurity;
}
export declare class ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncDocumentPermissionListSyncDocumentPermissionResponse extends SpeakeasyBase {
    meta?: ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta;
    permissions?: shared.PreviewSyncServiceDocumentDocumentPermission[];
}
export declare class ListSyncDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    listSyncDocumentPermissionResponse?: ListSyncDocumentPermissionListSyncDocumentPermissionResponse;
    statusCode: number;
}
