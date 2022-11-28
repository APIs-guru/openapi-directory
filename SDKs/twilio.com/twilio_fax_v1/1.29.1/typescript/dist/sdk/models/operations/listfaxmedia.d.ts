import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListFaxMediaServerList: readonly ["https://fax.twilio.com"];
export declare class ListFaxMediaPathParams extends SpeakeasyBase {
    faxSid: string;
}
export declare class ListFaxMediaQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListFaxMediaSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListFaxMediaListFaxMediaResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListFaxMediaListFaxMediaResponse extends SpeakeasyBase {
    media?: shared.FaxV1FaxFaxMedia[];
    meta?: ListFaxMediaListFaxMediaResponseMeta;
}
export declare class ListFaxMediaRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListFaxMediaPathParams;
    queryParams: ListFaxMediaQueryParams;
    security: ListFaxMediaSecurity;
}
export declare class ListFaxMediaResponse extends SpeakeasyBase {
    contentType: string;
    listFaxMediaResponse?: ListFaxMediaListFaxMediaResponse;
    statusCode: number;
}
