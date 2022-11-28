import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSyncMapItemServerList: readonly ["https://sync.twilio.com"];
export declare class FetchSyncMapItemPathParams extends SpeakeasyBase {
    key: string;
    mapSid: string;
    serviceSid: string;
}
export declare class FetchSyncMapItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncMapItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncMapItemPathParams;
    security: FetchSyncMapItemSecurity;
}
export declare class FetchSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncMapSyncMapItem?: shared.SyncV1ServiceSyncMapSyncMapItem;
}
