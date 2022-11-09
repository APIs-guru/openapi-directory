import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEMODELBUILD_SERVERS: string[];
export declare class CreateModelBuildPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class CreateModelBuildCreateModelBuildRequest extends SpeakeasyBase {
    statusCallback?: string;
    uniqueName?: string;
}
export declare class CreateModelBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateModelBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateModelBuildPathParams;
    request?: CreateModelBuildCreateModelBuildRequest;
    security: CreateModelBuildSecurity;
}
export declare class CreateModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantModelBuild?: shared.AutopilotV1AssistantModelBuild;
}
