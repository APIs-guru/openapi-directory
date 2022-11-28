import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSupportingDocumentTypeServerList: readonly ["https://numbers.twilio.com"];
export declare class ListSupportingDocumentTypeQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSupportingDocumentTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSupportingDocumentTypeListSupportingDocumentTypeResponse extends SpeakeasyBase {
    meta?: ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta;
    supportingDocumentTypes?: shared.NumbersV2RegulatoryComplianceSupportingDocumentType[];
}
export declare class ListSupportingDocumentTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListSupportingDocumentTypeQueryParams;
    security: ListSupportingDocumentTypeSecurity;
}
export declare class ListSupportingDocumentTypeResponse extends SpeakeasyBase {
    contentType: string;
    listSupportingDocumentTypeResponse?: ListSupportingDocumentTypeListSupportingDocumentTypeResponse;
    statusCode: number;
}
