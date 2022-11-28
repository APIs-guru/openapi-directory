import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTaskServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchTaskPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTaskPathParams;
    security: FetchTaskSecurity;
}
export declare class FetchTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantTask?: shared.AutopilotV1AssistantTask;
}
