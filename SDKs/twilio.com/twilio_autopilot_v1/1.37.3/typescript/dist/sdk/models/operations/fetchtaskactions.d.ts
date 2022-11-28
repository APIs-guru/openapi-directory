import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTaskActionsServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchTaskActionsPathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class FetchTaskActionsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTaskActionsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTaskActionsPathParams;
    security: FetchTaskActionsSecurity;
}
export declare class FetchTaskActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantTaskTaskActions?: shared.AutopilotV1AssistantTaskTaskActions;
}
