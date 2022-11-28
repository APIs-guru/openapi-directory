import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSyncSyncMapItemServerList: readonly ["https://preview.twilio.com"];
export declare class ListSyncSyncMapItemPathParams extends SpeakeasyBase {
    mapSid: string;
    serviceSid: string;
}
export declare class ListSyncSyncMapItemQueryParams extends SpeakeasyBase {
    bounds?: shared.SyncMapItemEnumQueryFromBoundTypeEnum;
    from?: string;
    order?: shared.SyncMapItemEnumQueryResultOrderEnum;
    pageSize?: number;
}
export declare class ListSyncSyncMapItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncSyncMapItemListSyncSyncMapItemResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncSyncMapItemListSyncSyncMapItemResponse extends SpeakeasyBase {
    items?: shared.PreviewSyncServiceSyncMapSyncMapItem[];
    meta?: ListSyncSyncMapItemListSyncSyncMapItemResponseMeta;
}
export declare class ListSyncSyncMapItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncSyncMapItemPathParams;
    queryParams: ListSyncSyncMapItemQueryParams;
    security: ListSyncSyncMapItemSecurity;
}
export declare class ListSyncSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    listSyncSyncMapItemResponse?: ListSyncSyncMapItemListSyncSyncMapItemResponse;
    statusCode: number;
}
