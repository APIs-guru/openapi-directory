import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TaskDeletePathParams extends SpeakeasyBase {
    jobId: string;
    taskId: string;
}
export declare class TaskDeleteQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class TaskDeleteHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class TaskDeleteRequest extends SpeakeasyBase {
    pathParams: TaskDeletePathParams;
    queryParams: TaskDeleteQueryParams;
    headers: TaskDeleteHeaders;
}
export declare class TaskDeleteResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
