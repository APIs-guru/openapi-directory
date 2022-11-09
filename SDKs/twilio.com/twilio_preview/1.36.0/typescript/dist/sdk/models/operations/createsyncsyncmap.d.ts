import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESYNCSYNCMAP_SERVERS: string[];
export declare class CreateSyncSyncMapPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateSyncSyncMapCreateSyncSyncMapRequest extends SpeakeasyBase {
    uniqueName?: string;
}
export declare class CreateSyncSyncMapSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSyncSyncMapRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSyncSyncMapPathParams;
    request?: CreateSyncSyncMapCreateSyncSyncMapRequest;
    security: CreateSyncSyncMapSecurity;
}
export declare class CreateSyncSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncMap?: shared.PreviewSyncServiceSyncMap;
}
