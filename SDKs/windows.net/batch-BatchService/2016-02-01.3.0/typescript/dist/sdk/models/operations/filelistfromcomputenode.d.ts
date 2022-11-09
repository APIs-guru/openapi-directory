import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class FileListFromComputeNodePathParams extends SpeakeasyBase {
    nodeId: string;
    poolId: string;
}
export declare class FileListFromComputeNodeQueryParams extends SpeakeasyBase {
    dollarFilter?: string;
    apiVersion: string;
    maxresults?: number;
    recursive?: boolean;
    timeout?: number;
}
export declare class FileListFromComputeNodeHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class FileListFromComputeNodeRequest extends SpeakeasyBase {
    pathParams: FileListFromComputeNodePathParams;
    queryParams: FileListFromComputeNodeQueryParams;
    headers: FileListFromComputeNodeHeaders;
}
export declare class FileListFromComputeNodeResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    nodeFileListResult?: any;
    statusCode: number;
}
