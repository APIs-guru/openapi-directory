import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSyncListItemServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateSyncListItemPathParams extends SpeakeasyBase {
    index: number;
    listSid: string;
    serviceSid: string;
}
export declare class UpdateSyncListItemHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class UpdateSyncListItemUpdateSyncListItemRequest extends SpeakeasyBase {
    collectionTtl?: number;
    data?: any;
    itemTtl?: number;
    ttl?: number;
}
export declare class UpdateSyncListItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncListItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncListItemPathParams;
    headers: UpdateSyncListItemHeaders;
    request?: UpdateSyncListItemUpdateSyncListItemRequest;
    security: UpdateSyncListItemSecurity;
}
export declare class UpdateSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncListSyncListItem?: shared.SyncV1ServiceSyncListSyncListItem;
}
