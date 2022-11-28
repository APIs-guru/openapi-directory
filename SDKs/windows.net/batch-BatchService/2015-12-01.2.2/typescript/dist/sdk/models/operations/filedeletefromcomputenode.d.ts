import { SpeakeasyBase } from "../../../internal/utils";
export declare class FileDeleteFromComputeNodePathParams extends SpeakeasyBase {
    fileName: string;
    nodeId: string;
    poolId: string;
}
export declare class FileDeleteFromComputeNodeQueryParams extends SpeakeasyBase {
    apiVersion: string;
    recursive?: boolean;
    timeout?: number;
}
export declare class FileDeleteFromComputeNodeHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class FileDeleteFromComputeNodeRequest extends SpeakeasyBase {
    pathParams: FileDeleteFromComputeNodePathParams;
    queryParams: FileDeleteFromComputeNodeQueryParams;
    headers: FileDeleteFromComputeNodeHeaders;
}
export declare class FileDeleteFromComputeNodeResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
