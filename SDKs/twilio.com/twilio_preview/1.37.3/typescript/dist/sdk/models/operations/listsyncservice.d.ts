import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSyncServiceServerList: readonly ["https://preview.twilio.com"];
export declare class ListSyncServiceQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSyncServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncServiceListSyncServiceResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncServiceListSyncServiceResponse extends SpeakeasyBase {
    meta?: ListSyncServiceListSyncServiceResponseMeta;
    services?: shared.PreviewSyncService[];
}
export declare class ListSyncServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListSyncServiceQueryParams;
    security: ListSyncServiceSecurity;
}
export declare class ListSyncServiceResponse extends SpeakeasyBase {
    contentType: string;
    listSyncServiceResponse?: ListSyncServiceListSyncServiceResponse;
    statusCode: number;
}
