import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateTaskQueueServerList: readonly ["https://taskrouter.twilio.com"];
export declare class UpdateTaskQueuePathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class UpdateTaskQueueUpdateTaskQueueRequest extends SpeakeasyBase {
    assignmentActivitySid?: string;
    friendlyName?: string;
    maxReservedWorkers?: number;
    reservationActivitySid?: string;
    targetWorkers?: string;
    taskOrder?: shared.TaskQueueEnumTaskOrderEnum;
}
export declare class UpdateTaskQueueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateTaskQueueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateTaskQueuePathParams;
    request?: UpdateTaskQueueUpdateTaskQueueRequest;
    security: UpdateTaskQueueSecurity;
}
export declare class UpdateTaskQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceTaskQueue?: shared.TaskrouterV1WorkspaceTaskQueue;
}
