import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaskListSubtasksPathParams extends SpeakeasyBase {
    jobId: string;
    taskId: string;
}
export declare class TaskListSubtasksQueryParams extends SpeakeasyBase {
    dollarSelect?: string;
    apiVersion: string;
    timeout?: number;
}
export declare class TaskListSubtasksHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class TaskListSubtasksRequest extends SpeakeasyBase {
    pathParams: TaskListSubtasksPathParams;
    queryParams: TaskListSubtasksQueryParams;
    headers: TaskListSubtasksHeaders;
}
export declare class TaskListSubtasksResponse extends SpeakeasyBase {
    batchError?: any;
    cloudTaskListSubtasksResult?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
