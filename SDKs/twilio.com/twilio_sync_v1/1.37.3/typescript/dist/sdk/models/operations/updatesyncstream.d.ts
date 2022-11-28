import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSyncStreamServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateSyncStreamPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateSyncStreamUpdateSyncStreamRequest extends SpeakeasyBase {
    ttl?: number;
}
export declare class UpdateSyncStreamSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncStreamRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncStreamPathParams;
    request?: UpdateSyncStreamUpdateSyncStreamRequest;
    security: UpdateSyncStreamSecurity;
}
export declare class UpdateSyncStreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncStream?: shared.SyncV1ServiceSyncStream;
}
