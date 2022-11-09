import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEDEPLOYMENT_SERVERS: string[];
export declare class CreateDeploymentPathParams extends SpeakeasyBase {
    environmentSid: string;
    serviceSid: string;
}
export declare class CreateDeploymentCreateDeploymentRequest extends SpeakeasyBase {
    buildSid?: string;
}
export declare class CreateDeploymentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateDeploymentPathParams;
    request?: CreateDeploymentCreateDeploymentRequest;
    security: CreateDeploymentSecurity;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceEnvironmentDeployment?: shared.ServerlessV1ServiceEnvironmentDeployment;
}
