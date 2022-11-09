import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESYNCSTREAM_SERVERS: string[];
export declare class CreateSyncStreamPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateSyncStreamCreateSyncStreamRequest extends SpeakeasyBase {
    ttl?: number;
    uniqueName?: string;
}
export declare class CreateSyncStreamSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSyncStreamRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSyncStreamPathParams;
    request?: CreateSyncStreamCreateSyncStreamRequest;
    security: CreateSyncStreamSecurity;
}
export declare class CreateSyncStreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncStream?: shared.SyncV1ServiceSyncStream;
}
