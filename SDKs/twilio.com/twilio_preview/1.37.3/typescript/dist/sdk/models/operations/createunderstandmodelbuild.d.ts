import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateUnderstandModelBuildServerList: readonly ["https://preview.twilio.com"];
export declare class CreateUnderstandModelBuildPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class CreateUnderstandModelBuildCreateUnderstandModelBuildRequest extends SpeakeasyBase {
    statusCallback?: string;
    uniqueName?: string;
}
export declare class CreateUnderstandModelBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUnderstandModelBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateUnderstandModelBuildPathParams;
    request?: CreateUnderstandModelBuildCreateUnderstandModelBuildRequest;
    security: CreateUnderstandModelBuildSecurity;
}
export declare class CreateUnderstandModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantModelBuild?: shared.PreviewUnderstandAssistantModelBuild;
}
