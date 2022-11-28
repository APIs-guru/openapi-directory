import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateBuildServerList: readonly ["https://serverless.twilio.com"];
export declare class CreateBuildPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateBuildCreateBuildRequest extends SpeakeasyBase {
    assetVersions?: string[];
    dependencies?: string;
    functionVersions?: string[];
    runtime?: string;
}
export declare class CreateBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateBuildPathParams;
    request?: CreateBuildCreateBuildRequest;
    security: CreateBuildSecurity;
}
export declare class CreateBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceBuild?: shared.ServerlessV1ServiceBuild;
}
