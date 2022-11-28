import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSyncSyncListServerList: readonly ["https://preview.twilio.com"];
export declare class ListSyncSyncListPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListSyncSyncListQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSyncSyncListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncSyncListListSyncSyncListResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncSyncListListSyncSyncListResponse extends SpeakeasyBase {
    lists?: shared.PreviewSyncServiceSyncList[];
    meta?: ListSyncSyncListListSyncSyncListResponseMeta;
}
export declare class ListSyncSyncListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncSyncListPathParams;
    queryParams: ListSyncSyncListQueryParams;
    security: ListSyncSyncListSecurity;
}
export declare class ListSyncSyncListResponse extends SpeakeasyBase {
    contentType: string;
    listSyncSyncListResponse?: ListSyncSyncListListSyncSyncListResponse;
    statusCode: number;
}
