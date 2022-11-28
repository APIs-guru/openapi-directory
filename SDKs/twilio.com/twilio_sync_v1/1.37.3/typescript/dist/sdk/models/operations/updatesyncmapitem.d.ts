import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSyncMapItemServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateSyncMapItemPathParams extends SpeakeasyBase {
    key: string;
    mapSid: string;
    serviceSid: string;
}
export declare class UpdateSyncMapItemHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class UpdateSyncMapItemUpdateSyncMapItemRequest extends SpeakeasyBase {
    collectionTtl?: number;
    data?: any;
    itemTtl?: number;
    ttl?: number;
}
export declare class UpdateSyncMapItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncMapItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncMapItemPathParams;
    headers: UpdateSyncMapItemHeaders;
    request?: UpdateSyncMapItemUpdateSyncMapItemRequest;
    security: UpdateSyncMapItemSecurity;
}
export declare class UpdateSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncMapSyncMapItem?: shared.SyncV1ServiceSyncMapSyncMapItem;
}
