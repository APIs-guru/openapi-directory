import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSYNCLISTITEM_SERVERS: string[];
export declare class ListSyncListItemPathParams extends SpeakeasyBase {
    listSid: string;
    serviceSid: string;
}
export declare class ListSyncListItemQueryParams extends SpeakeasyBase {
    bounds?: shared.SyncListItemEnumQueryFromBoundTypeEnum;
    from?: string;
    order?: shared.SyncListItemEnumQueryResultOrderEnum;
    pageSize?: number;
}
export declare class ListSyncListItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncListItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncListItemPathParams;
    queryParams: ListSyncListItemQueryParams;
    security: ListSyncListItemSecurity;
}
export declare class ListSyncListItemListSyncListItemResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncListItemListSyncListItemResponse extends SpeakeasyBase {
    items?: shared.SyncV1ServiceSyncListSyncListItem[];
    meta?: ListSyncListItemListSyncListItemResponseMeta;
}
export declare class ListSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    listSyncListItemResponse?: ListSyncListItemListSyncListItemResponse;
    statusCode: number;
}
