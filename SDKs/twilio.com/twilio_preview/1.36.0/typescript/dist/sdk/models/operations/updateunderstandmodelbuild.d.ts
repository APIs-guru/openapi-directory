import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEUNDERSTANDMODELBUILD_SERVERS: string[];
export declare class UpdateUnderstandModelBuildPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest extends SpeakeasyBase {
    uniqueName?: string;
}
export declare class UpdateUnderstandModelBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUnderstandModelBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUnderstandModelBuildPathParams;
    request?: UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest;
    security: UpdateUnderstandModelBuildSecurity;
}
export declare class UpdateUnderstandModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantModelBuild?: shared.PreviewUnderstandAssistantModelBuild;
}
