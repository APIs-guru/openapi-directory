import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class FileGetFromTaskPathParams extends SpeakeasyBase {
    fileName: string;
    jobId: string;
    taskId: string;
}
export declare class FileGetFromTaskQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class FileGetFromTaskHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    ocpRange?: string;
    returnClientRequestId?: boolean;
}
export declare class FileGetFromTaskRequest extends SpeakeasyBase {
    pathParams: FileGetFromTaskPathParams;
    queryParams: FileGetFromTaskQueryParams;
    headers: FileGetFromTaskHeaders;
}
export declare class FileGetFromTaskResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    fileGetFromTask200ApplicationJsonBinaryString?: Uint8Array;
    headers: Map<string, string[]>;
    statusCode: number;
}
