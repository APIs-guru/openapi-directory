import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSyncStreamServerList: readonly ["https://sync.twilio.com"];
export declare class FetchSyncStreamPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchSyncStreamSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncStreamRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncStreamPathParams;
    security: FetchSyncStreamSecurity;
}
export declare class FetchSyncStreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncStream?: shared.SyncV1ServiceSyncStream;
}
