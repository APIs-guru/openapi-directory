import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSYNCSYNCLISTITEM_SERVERS: string[];
export declare class FetchSyncSyncListItemPathParams extends SpeakeasyBase {
    index: number;
    listSid: string;
    serviceSid: string;
}
export declare class FetchSyncSyncListItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncSyncListItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncSyncListItemPathParams;
    security: FetchSyncSyncListItemSecurity;
}
export declare class FetchSyncSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncListSyncListItem?: shared.PreviewSyncServiceSyncListSyncListItem;
}
