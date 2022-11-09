import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESAMPLE_SERVERS: string[];
export declare class CreateSamplePathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class CreateSampleCreateSampleRequest extends SpeakeasyBase {
    language: string;
    sourceChannel?: string;
    taggedText: string;
}
export declare class CreateSampleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSampleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSamplePathParams;
    request?: CreateSampleCreateSampleRequest;
    security: CreateSampleSecurity;
}
export declare class CreateSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantTaskSample?: shared.AutopilotV1AssistantTaskSample;
}
