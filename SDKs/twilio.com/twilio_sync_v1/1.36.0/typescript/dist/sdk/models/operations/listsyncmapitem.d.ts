import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSYNCMAPITEM_SERVERS: string[];
export declare class ListSyncMapItemPathParams extends SpeakeasyBase {
    mapSid: string;
    serviceSid: string;
}
export declare class ListSyncMapItemQueryParams extends SpeakeasyBase {
    bounds?: shared.SyncMapItemEnumQueryFromBoundTypeEnum;
    from?: string;
    order?: shared.SyncMapItemEnumQueryResultOrderEnum;
    pageSize?: number;
}
export declare class ListSyncMapItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncMapItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncMapItemPathParams;
    queryParams: ListSyncMapItemQueryParams;
    security: ListSyncMapItemSecurity;
}
export declare class ListSyncMapItemListSyncMapItemResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncMapItemListSyncMapItemResponse extends SpeakeasyBase {
    items?: shared.SyncV1ServiceSyncMapSyncMapItem[];
    meta?: ListSyncMapItemListSyncMapItemResponseMeta;
}
export declare class ListSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    listSyncMapItemResponse?: ListSyncMapItemListSyncMapItemResponse;
    statusCode: number;
}
