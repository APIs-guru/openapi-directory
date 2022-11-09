import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTDAY_SERVERS: string[];
export declare class ListDayPathParams extends SpeakeasyBase {
    resourceType: string;
}
export declare class ListDayQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListDaySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDayRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListDayPathParams;
    queryParams: ListDayQueryParams;
    security: ListDaySecurity;
}
export declare class ListDayListDayResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListDayListDayResponse extends SpeakeasyBase {
    days?: shared.BulkexportsV1ExportDay[];
    meta?: ListDayListDayResponseMeta;
}
export declare class ListDayResponse extends SpeakeasyBase {
    contentType: string;
    listDayResponse?: ListDayListDayResponse;
    statusCode: number;
}
