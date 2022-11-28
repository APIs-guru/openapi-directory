import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSupportingDocumentServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListSupportingDocumentQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSupportingDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSupportingDocumentListSupportingDocumentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSupportingDocumentListSupportingDocumentResponse extends SpeakeasyBase {
    meta?: ListSupportingDocumentListSupportingDocumentResponseMeta;
    results?: shared.TrusthubV1SupportingDocument[];
}
export declare class ListSupportingDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListSupportingDocumentQueryParams;
    security: ListSupportingDocumentSecurity;
}
export declare class ListSupportingDocumentResponse extends SpeakeasyBase {
    contentType: string;
    listSupportingDocumentResponse?: ListSupportingDocumentListSupportingDocumentResponse;
    statusCode: number;
}
