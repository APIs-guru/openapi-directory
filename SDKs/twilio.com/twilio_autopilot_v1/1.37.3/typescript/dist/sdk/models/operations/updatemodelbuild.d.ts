import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateModelBuildServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateModelBuildPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class UpdateModelBuildUpdateModelBuildRequest extends SpeakeasyBase {
    uniqueName?: string;
}
export declare class UpdateModelBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateModelBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateModelBuildPathParams;
    request?: UpdateModelBuildUpdateModelBuildRequest;
    security: UpdateModelBuildSecurity;
}
export declare class UpdateModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantModelBuild?: shared.AutopilotV1AssistantModelBuild;
}
