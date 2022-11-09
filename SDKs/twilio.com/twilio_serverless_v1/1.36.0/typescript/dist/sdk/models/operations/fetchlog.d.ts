import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHLOG_SERVERS: string[];
export declare class FetchLogPathParams extends SpeakeasyBase {
    environmentSid: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchLogSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchLogRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchLogPathParams;
    security: FetchLogSecurity;
}
export declare class FetchLogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceEnvironmentLog?: shared.ServerlessV1ServiceEnvironmentLog;
}
