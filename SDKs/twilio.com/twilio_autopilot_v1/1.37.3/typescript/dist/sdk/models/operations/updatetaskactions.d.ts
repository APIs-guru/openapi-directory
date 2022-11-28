import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateTaskActionsServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateTaskActionsPathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class UpdateTaskActionsUpdateTaskActionsRequest extends SpeakeasyBase {
    actions?: any;
}
export declare class UpdateTaskActionsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateTaskActionsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateTaskActionsPathParams;
    request?: UpdateTaskActionsUpdateTaskActionsRequest;
    security: UpdateTaskActionsSecurity;
}
export declare class UpdateTaskActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantTaskTaskActions?: shared.AutopilotV1AssistantTaskTaskActions;
}
