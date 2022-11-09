import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TaskTerminatePathParams extends SpeakeasyBase {
    jobId: string;
    taskId: string;
}
export declare class TaskTerminateQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class TaskTerminateHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class TaskTerminateRequest extends SpeakeasyBase {
    pathParams: TaskTerminatePathParams;
    queryParams: TaskTerminateQueryParams;
    headers: TaskTerminateHeaders;
}
export declare class TaskTerminateResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
