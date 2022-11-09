import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSYNCLISTITEM_SERVERS: string[];
export declare class FetchSyncListItemPathParams extends SpeakeasyBase {
    index: number;
    listSid: string;
    serviceSid: string;
}
export declare class FetchSyncListItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncListItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncListItemPathParams;
    security: FetchSyncListItemSecurity;
}
export declare class FetchSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncListSyncListItem?: shared.SyncV1ServiceSyncListSyncListItem;
}
