import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSyncMapServerList: readonly ["https://sync.twilio.com"];
export declare class FetchSyncMapPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchSyncMapSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncMapRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncMapPathParams;
    security: FetchSyncMapSecurity;
}
export declare class FetchSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncMap?: shared.SyncV1ServiceSyncMap;
}
