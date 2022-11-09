import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHUNDERSTANDMODELBUILD_SERVERS: string[];
export declare class FetchUnderstandModelBuildPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchUnderstandModelBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandModelBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandModelBuildPathParams;
    security: FetchUnderstandModelBuildSecurity;
}
export declare class FetchUnderstandModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantModelBuild?: shared.PreviewUnderstandAssistantModelBuild;
}
