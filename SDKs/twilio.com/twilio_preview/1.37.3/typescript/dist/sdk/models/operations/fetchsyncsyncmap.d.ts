import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSyncSyncMapServerList: readonly ["https://preview.twilio.com"];
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
