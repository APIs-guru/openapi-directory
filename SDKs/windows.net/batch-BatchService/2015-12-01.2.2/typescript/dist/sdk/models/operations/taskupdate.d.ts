import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TaskUpdatePathParams extends SpeakeasyBase {
    jobId: string;
    taskId: string;
}
export declare class TaskUpdateQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class TaskUpdateHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class TaskUpdateRequest extends SpeakeasyBase {
    pathParams: TaskUpdatePathParams;
    queryParams: TaskUpdateQueryParams;
    headers: TaskUpdateHeaders;
    request: any;
}
export declare class TaskUpdateResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
