import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchFieldServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchFieldPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
    taskSid: string;
}
export declare class FetchFieldSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFieldRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFieldPathParams;
    security: FetchFieldSecurity;
}
export declare class FetchFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantTaskField?: shared.AutopilotV1AssistantTaskField;
}
