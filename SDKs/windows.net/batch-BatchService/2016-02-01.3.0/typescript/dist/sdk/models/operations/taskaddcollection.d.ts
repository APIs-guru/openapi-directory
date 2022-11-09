import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TaskAddCollectionPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class TaskAddCollectionQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class TaskAddCollectionHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class TaskAddCollectionRequest extends SpeakeasyBase {
    pathParams: TaskAddCollectionPathParams;
    queryParams: TaskAddCollectionQueryParams;
    headers: TaskAddCollectionHeaders;
    request: any;
}
export declare class TaskAddCollectionResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    taskAddCollectionResult?: any;
}
