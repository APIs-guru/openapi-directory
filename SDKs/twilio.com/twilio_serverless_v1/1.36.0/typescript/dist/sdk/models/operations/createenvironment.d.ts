import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEENVIRONMENT_SERVERS: string[];
export declare class CreateEnvironmentPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateEnvironmentCreateEnvironmentRequest extends SpeakeasyBase {
    domainSuffix?: string;
    uniqueName: string;
}
export declare class CreateEnvironmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateEnvironmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateEnvironmentPathParams;
    request?: CreateEnvironmentCreateEnvironmentRequest;
    security: CreateEnvironmentSecurity;
}
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceEnvironment?: shared.ServerlessV1ServiceEnvironment;
}
