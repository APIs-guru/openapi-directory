import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchDeploymentServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchDeploymentPathParams extends SpeakeasyBase {
    environmentSid: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchDeploymentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDeploymentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchDeploymentPathParams;
    security: FetchDeploymentSecurity;
}
export declare class FetchDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceEnvironmentDeployment?: shared.ServerlessV1ServiceEnvironmentDeployment;
}
