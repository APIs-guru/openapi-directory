import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSAMPLE_SERVERS: string[];
export declare class FetchSamplePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
    taskSid: string;
}
export declare class FetchSampleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSampleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSamplePathParams;
    security: FetchSampleSecurity;
}
export declare class FetchSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantTaskSample?: shared.AutopilotV1AssistantTaskSample;
}
