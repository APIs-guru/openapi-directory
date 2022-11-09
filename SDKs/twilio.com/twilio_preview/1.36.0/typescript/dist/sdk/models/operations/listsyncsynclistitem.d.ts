import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSYNCSYNCLISTITEM_SERVERS: string[];
export declare class ListSyncSyncListItemPathParams extends SpeakeasyBase {
    listSid: string;
    serviceSid: string;
}
export declare class ListSyncSyncListItemQueryParams extends SpeakeasyBase {
    bounds?: shared.SyncListItemEnumQueryFromBoundTypeEnum;
    from?: string;
    order?: shared.SyncListItemEnumQueryResultOrderEnum;
    pageSize?: number;
}
export declare class ListSyncSyncListItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncSyncListItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncSyncListItemPathParams;
    queryParams: ListSyncSyncListItemQueryParams;
    security: ListSyncSyncListItemSecurity;
}
export declare class ListSyncSyncListItemListSyncSyncListItemResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncSyncListItemListSyncSyncListItemResponse extends SpeakeasyBase {
    items?: shared.PreviewSyncServiceSyncListSyncListItem[];
    meta?: ListSyncSyncListItemListSyncSyncListItemResponseMeta;
}
export declare class ListSyncSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    listSyncSyncListItemResponse?: ListSyncSyncListItemListSyncSyncListItemResponse;
    statusCode: number;
}
