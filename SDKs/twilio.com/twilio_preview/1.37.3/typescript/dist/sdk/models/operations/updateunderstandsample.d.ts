import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateUnderstandSampleServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandSamplePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
    taskSid: string;
}
export declare class UpdateUnderstandSampleUpdateUnderstandSampleRequest extends SpeakeasyBase {
    language?: string;
    sourceChannel?: string;
    taggedText?: string;
}
export declare class UpdateUnderstandSampleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUnderstandSampleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUnderstandSamplePathParams;
    request?: UpdateUnderstandSampleUpdateUnderstandSampleRequest;
    security: UpdateUnderstandSampleSecurity;
}
export declare class UpdateUnderstandSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantTaskSample?: shared.PreviewUnderstandAssistantTaskSample;
}
