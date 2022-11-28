import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchEnvironmentServerList: readonly ["https://serverless.twilio.com"];
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
