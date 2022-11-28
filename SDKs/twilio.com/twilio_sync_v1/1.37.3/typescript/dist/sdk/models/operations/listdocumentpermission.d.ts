import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListDocumentPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class ListDocumentPermissionPathParams extends SpeakeasyBase {
    documentSid: string;
    serviceSid: string;
}
export declare class ListDocumentPermissionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListDocumentPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDocumentPermissionListDocumentPermissionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListDocumentPermissionListDocumentPermissionResponse extends SpeakeasyBase {
    meta?: ListDocumentPermissionListDocumentPermissionResponseMeta;
    permissions?: shared.SyncV1ServiceDocumentDocumentPermission[];
}
export declare class ListDocumentPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListDocumentPermissionPathParams;
    queryParams: ListDocumentPermissionQueryParams;
    security: ListDocumentPermissionSecurity;
}
export declare class ListDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    listDocumentPermissionResponse?: ListDocumentPermissionListDocumentPermissionResponse;
    statusCode: number;
}
