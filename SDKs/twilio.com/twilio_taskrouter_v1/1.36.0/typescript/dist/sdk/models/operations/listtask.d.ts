import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTTASK_SERVERS: string[];
export declare class ListTaskPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class ListTaskQueryParams extends SpeakeasyBase {
    assignmentStatus?: string[];
    evaluateTaskAttributes?: string;
    hasAddons?: boolean;
    ordering?: string;
    pageSize?: number;
    priority?: number;
    taskQueueName?: string;
    taskQueueSid?: string;
    workflowName?: string;
    workflowSid?: string;
}
export declare class ListTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListTaskPathParams;
    queryParams: ListTaskQueryParams;
    security: ListTaskSecurity;
}
export declare class ListTaskListTaskResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListTaskListTaskResponse extends SpeakeasyBase {
    meta?: ListTaskListTaskResponseMeta;
    tasks?: shared.TaskrouterV1WorkspaceTask[];
}
export declare class ListTaskResponse extends SpeakeasyBase {
    contentType: string;
    listTaskResponse?: ListTaskListTaskResponse;
    statusCode: number;
}
