import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchVariableServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchVariablePathParams extends SpeakeasyBase {
    environmentSid: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchVariableSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchVariableRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchVariablePathParams;
    security: FetchVariableSecurity;
}
export declare class FetchVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceEnvironmentVariable?: shared.ServerlessV1ServiceEnvironmentVariable;
}
