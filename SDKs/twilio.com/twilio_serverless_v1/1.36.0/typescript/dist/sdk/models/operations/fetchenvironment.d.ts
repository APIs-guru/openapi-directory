import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHENVIRONMENT_SERVERS: string[];
export declare class FetchEnvironmentPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchEnvironmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchEnvironmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchEnvironmentPathParams;
    security: FetchEnvironmentSecurity;
}
export declare class FetchEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceEnvironment?: shared.ServerlessV1ServiceEnvironment;
}
