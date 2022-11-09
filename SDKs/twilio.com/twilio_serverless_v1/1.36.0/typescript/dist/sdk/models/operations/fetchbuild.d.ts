import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHBUILD_SERVERS: string[];
export declare class FetchBuildPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchBuildPathParams;
    security: FetchBuildSecurity;
}
export declare class FetchBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceBuild?: shared.ServerlessV1ServiceBuild;
}
