import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTDOCUMENT_SERVERS: string[];
export declare class ListDocumentPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListDocumentQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListDocumentPathParams;
    queryParams: ListDocumentQueryParams;
    security: ListDocumentSecurity;
}
export declare class ListDocumentListDocumentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListDocumentListDocumentResponse extends SpeakeasyBase {
    documents?: shared.SyncV1ServiceDocument[];
    meta?: ListDocumentListDocumentResponseMeta;
}
export declare class ListDocumentResponse extends SpeakeasyBase {
    contentType: string;
    listDocumentResponse?: ListDocumentListDocumentResponse;
    statusCode: number;
}
