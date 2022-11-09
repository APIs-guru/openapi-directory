import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTFAX_SERVERS: string[];
export declare class ListFaxQueryParams extends SpeakeasyBase {
    dateCreatedAfter?: Date;
    dateCreatedOnOrBefore?: Date;
    from?: string;
    pageSize?: number;
    to?: string;
}
export declare class ListFaxSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListFaxRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListFaxQueryParams;
    security: ListFaxSecurity;
}
export declare class ListFaxListFaxResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListFaxListFaxResponse extends SpeakeasyBase {
    faxes?: shared.FaxV1Fax[];
    meta?: ListFaxListFaxResponseMeta;
}
export declare class ListFaxResponse extends SpeakeasyBase {
    contentType: string;
    listFaxResponse?: ListFaxListFaxResponse;
    statusCode: number;
}
