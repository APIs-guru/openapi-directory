import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TaskGetPathParams extends SpeakeasyBase {
    jobId: string;
    taskId: string;
}
export declare class TaskGetQueryParams extends SpeakeasyBase {
    dollarExpand?: string;
    dollarSelect?: string;
    apiVersion: string;
    timeout?: number;
}
export declare class TaskGetHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class TaskGetRequest extends SpeakeasyBase {
    pathParams: TaskGetPathParams;
    queryParams: TaskGetQueryParams;
    headers: TaskGetHeaders;
}
export declare class TaskGetResponse extends SpeakeasyBase {
    batchError?: any;
    cloudTask?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
