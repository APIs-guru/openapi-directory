import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSyncMapServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateSyncMapPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateSyncMapUpdateSyncMapRequest extends SpeakeasyBase {
    collectionTtl?: number;
    ttl?: number;
}
export declare class UpdateSyncMapSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncMapRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncMapPathParams;
    request?: UpdateSyncMapUpdateSyncMapRequest;
    security: UpdateSyncMapSecurity;
}
export declare class UpdateSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncMap?: shared.SyncV1ServiceSyncMap;
}
