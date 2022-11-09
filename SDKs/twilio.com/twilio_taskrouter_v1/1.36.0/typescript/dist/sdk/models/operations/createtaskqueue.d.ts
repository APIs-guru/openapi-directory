import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATETASKQUEUE_SERVERS: string[];
export declare class CreateTaskQueuePathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class CreateTaskQueueCreateTaskQueueRequest extends SpeakeasyBase {
    assignmentActivitySid?: string;
    friendlyName: string;
    maxReservedWorkers?: number;
    reservationActivitySid?: string;
    targetWorkers?: string;
    taskOrder?: shared.TaskQueueEnumTaskOrderEnum;
}
export declare class CreateTaskQueueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateTaskQueueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateTaskQueuePathParams;
    request?: CreateTaskQueueCreateTaskQueueRequest;
    security: CreateTaskQueueSecurity;
}
export declare class CreateTaskQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceTaskQueue?: shared.TaskrouterV1WorkspaceTaskQueue;
}
