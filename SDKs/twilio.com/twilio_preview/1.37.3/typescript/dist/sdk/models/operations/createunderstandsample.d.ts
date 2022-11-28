import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateUnderstandSampleServerList: readonly ["https://preview.twilio.com"];
export declare class CreateUnderstandSamplePathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class CreateUnderstandSampleCreateUnderstandSampleRequest extends SpeakeasyBase {
    language: string;
    sourceChannel?: string;
    taggedText: string;
}
export declare class CreateUnderstandSampleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUnderstandSampleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateUnderstandSamplePathParams;
    request?: CreateUnderstandSampleCreateUnderstandSampleRequest;
    security: CreateUnderstandSampleSecurity;
}
export declare class CreateUnderstandSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantTaskSample?: shared.PreviewUnderstandAssistantTaskSample;
}
