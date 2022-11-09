import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATETASK_SERVERS: string[];
export declare class CreateTaskPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class CreateTaskCreateTaskRequest extends SpeakeasyBase {
    actions?: any;
    actionsUrl?: string;
    friendlyName?: string;
    uniqueName: string;
}
export declare class CreateTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateTaskPathParams;
    request?: CreateTaskCreateTaskRequest;
    security: CreateTaskSecurity;
}
export declare class CreateTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantTask?: shared.AutopilotV1AssistantTask;
}
