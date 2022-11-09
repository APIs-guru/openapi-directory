import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class FileListFromTaskPathParams extends SpeakeasyBase {
    jobId: string;
    taskId: string;
}
export declare class FileListFromTaskQueryParams extends SpeakeasyBase {
    dollarFilter?: string;
    apiVersion: string;
    maxresults?: number;
    recursive?: boolean;
    timeout?: number;
}
export declare class FileListFromTaskHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class FileListFromTaskRequest extends SpeakeasyBase {
    pathParams: FileListFromTaskPathParams;
    queryParams: FileListFromTaskQueryParams;
    headers: FileListFromTaskHeaders;
}
export declare class FileListFromTaskResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    nodeFileListResult?: any;
    statusCode: number;
}
