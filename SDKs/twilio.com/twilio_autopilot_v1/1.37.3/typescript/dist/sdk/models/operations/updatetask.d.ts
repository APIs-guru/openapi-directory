import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateTaskServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateTaskPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class UpdateTaskUpdateTaskRequest extends SpeakeasyBase {
    actions?: any;
    actionsUrl?: string;
    friendlyName?: string;
    uniqueName?: string;
}
export declare class UpdateTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateTaskPathParams;
    request?: UpdateTaskUpdateTaskRequest;
    security: UpdateTaskSecurity;
}
export declare class UpdateTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantTask?: shared.AutopilotV1AssistantTask;
}
