import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESYNCMAP_SERVERS: string[];
export declare class CreateSyncMapPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateSyncMapCreateSyncMapRequest extends SpeakeasyBase {
    collectionTtl?: number;
    ttl?: number;
    uniqueName?: string;
}
export declare class CreateSyncMapSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSyncMapRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSyncMapPathParams;
    request?: CreateSyncMapCreateSyncMapRequest;
    security: CreateSyncMapSecurity;
}
export declare class CreateSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncMap?: shared.SyncV1ServiceSyncMap;
}
