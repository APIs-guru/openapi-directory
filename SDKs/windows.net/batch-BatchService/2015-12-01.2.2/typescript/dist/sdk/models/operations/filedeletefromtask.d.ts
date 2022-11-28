import { SpeakeasyBase } from "../../../internal/utils";
export declare class FileDeleteFromTaskPathParams extends SpeakeasyBase {
    fileName: string;
    jobId: string;
    taskId: string;
}
export declare class FileDeleteFromTaskQueryParams extends SpeakeasyBase {
    apiVersion: string;
    recursive?: boolean;
    timeout?: number;
}
export declare class FileDeleteFromTaskHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class FileDeleteFromTaskRequest extends SpeakeasyBase {
    pathParams: FileDeleteFromTaskPathParams;
    queryParams: FileDeleteFromTaskQueryParams;
    headers: FileDeleteFromTaskHeaders;
}
export declare class FileDeleteFromTaskResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
