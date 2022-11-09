import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESAMPLE_SERVERS: string[];
export declare class UpdateSamplePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
    taskSid: string;
}
export declare class UpdateSampleUpdateSampleRequest extends SpeakeasyBase {
    language?: string;
    sourceChannel?: string;
    taggedText?: string;
}
export declare class UpdateSampleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSampleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSamplePathParams;
    request?: UpdateSampleUpdateSampleRequest;
    security: UpdateSampleSecurity;
}
export declare class UpdateSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantTaskSample?: shared.AutopilotV1AssistantTaskSample;
}
