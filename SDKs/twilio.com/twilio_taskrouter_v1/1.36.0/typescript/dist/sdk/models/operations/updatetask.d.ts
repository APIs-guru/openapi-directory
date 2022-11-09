import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATETASK_SERVERS: string[];
export declare class UpdateTaskPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class UpdateTaskHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class UpdateTaskUpdateTaskRequest extends SpeakeasyBase {
    assignmentStatus?: shared.TaskEnumStatusEnum;
    attributes?: string;
    priority?: number;
    reason?: string;
    taskChannel?: string;
}
export declare class UpdateTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateTaskPathParams;
    headers: UpdateTaskHeaders;
    request?: UpdateTaskUpdateTaskRequest;
    security: UpdateTaskSecurity;
}
export declare class UpdateTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceTask?: shared.TaskrouterV1WorkspaceTask;
}
