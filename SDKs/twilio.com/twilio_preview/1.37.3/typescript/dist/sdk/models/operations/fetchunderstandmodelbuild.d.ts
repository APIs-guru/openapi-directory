import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUnderstandModelBuildServerList: readonly ["https://preview.twilio.com"];
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
