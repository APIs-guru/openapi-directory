import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TaskListPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class TaskListQueryParams extends SpeakeasyBase {
    dollarExpand?: string;
    dollarFilter?: string;
    dollarSelect?: string;
    apiVersion: string;
    maxresults?: number;
    timeout?: number;
}
export declare class TaskListHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class TaskListRequest extends SpeakeasyBase {
    pathParams: TaskListPathParams;
    queryParams: TaskListQueryParams;
    headers: TaskListHeaders;
}
export declare class TaskListResponse extends SpeakeasyBase {
    batchError?: any;
    cloudTaskListResult?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
