import { SpeakeasyBase } from "../../../internal/utils";
export declare class FileGetNodeFilePropertiesFromTaskPathParams extends SpeakeasyBase {
    fileName: string;
    jobId: string;
    taskId: string;
}
export declare class FileGetNodeFilePropertiesFromTaskQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class FileGetNodeFilePropertiesFromTaskHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class FileGetNodeFilePropertiesFromTaskRequest extends SpeakeasyBase {
    pathParams: FileGetNodeFilePropertiesFromTaskPathParams;
    queryParams: FileGetNodeFilePropertiesFromTaskQueryParams;
    headers: FileGetNodeFilePropertiesFromTaskHeaders;
}
export declare class FileGetNodeFilePropertiesFromTaskResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
