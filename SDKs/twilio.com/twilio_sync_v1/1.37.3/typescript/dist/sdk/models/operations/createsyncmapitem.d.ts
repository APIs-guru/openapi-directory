import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSyncMapItemServerList: readonly ["https://sync.twilio.com"];
export declare class CreateSyncMapItemPathParams extends SpeakeasyBase {
    mapSid: string;
    serviceSid: string;
}
export declare class CreateSyncMapItemCreateSyncMapItemRequest extends SpeakeasyBase {
    collectionTtl?: number;
    data: any;
    itemTtl?: number;
    key: string;
    ttl?: number;
}
export declare class CreateSyncMapItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSyncMapItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSyncMapItemPathParams;
    request?: CreateSyncMapItemCreateSyncMapItemRequest;
    security: CreateSyncMapItemSecurity;
}
export declare class CreateSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncMapSyncMapItem?: shared.SyncV1ServiceSyncMapSyncMapItem;
}
