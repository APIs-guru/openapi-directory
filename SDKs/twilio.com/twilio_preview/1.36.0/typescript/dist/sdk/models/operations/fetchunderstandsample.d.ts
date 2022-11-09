import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHUNDERSTANDSAMPLE_SERVERS: string[];
export declare class FetchUnderstandSamplePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
    taskSid: string;
}
export declare class FetchUnderstandSampleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandSampleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandSamplePathParams;
    security: FetchUnderstandSampleSecurity;
}
export declare class FetchUnderstandSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantTaskSample?: shared.PreviewUnderstandAssistantTaskSample;
}
