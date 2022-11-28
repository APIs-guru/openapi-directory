import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSyncDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class ListSyncDocumentPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListSyncDocumentQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSyncDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncDocumentListSyncDocumentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncDocumentListSyncDocumentResponse extends SpeakeasyBase {
    documents?: shared.PreviewSyncServiceDocument[];
    meta?: ListSyncDocumentListSyncDocumentResponseMeta;
}
export declare class ListSyncDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncDocumentPathParams;
    queryParams: ListSyncDocumentQueryParams;
    security: ListSyncDocumentSecurity;
}
export declare class ListSyncDocumentResponse extends SpeakeasyBase {
    contentType: string;
    listSyncDocumentResponse?: ListSyncDocumentListSyncDocumentResponse;
    statusCode: number;
}
