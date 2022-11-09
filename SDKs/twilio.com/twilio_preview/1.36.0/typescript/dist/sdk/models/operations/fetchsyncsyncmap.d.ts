import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSYNCSYNCMAP_SERVERS: string[];
export declare class FetchSyncSyncMapPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchSyncSyncMapSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncSyncMapRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncSyncMapPathParams;
    security: FetchSyncSyncMapSecurity;
}
export declare class FetchSyncSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncMap?: shared.PreviewSyncServiceSyncMap;
}
