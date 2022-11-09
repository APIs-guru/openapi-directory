import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATETASK_SERVERS: string[];
export declare class CreateTaskPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class CreateTaskCreateTaskRequest extends SpeakeasyBase {
    attributes?: string;
    priority?: number;
    taskChannel?: string;
    timeout?: number;
    workflowSid?: string;
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
    taskrouterV1WorkspaceTask?: shared.TaskrouterV1WorkspaceTask;
}
