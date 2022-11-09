import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class FileGetFromComputeNodePathParams extends SpeakeasyBase {
    fileName: string;
    nodeId: string;
    poolId: string;
}
export declare class FileGetFromComputeNodeQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class FileGetFromComputeNodeHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    ocpRange?: string;
    returnClientRequestId?: boolean;
}
export declare class FileGetFromComputeNodeRequest extends SpeakeasyBase {
    pathParams: FileGetFromComputeNodePathParams;
    queryParams: FileGetFromComputeNodeQueryParams;
    headers: FileGetFromComputeNodeHeaders;
}
export declare class FileGetFromComputeNodeResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    fileGetFromComputeNode200ApplicationJsonBinaryString?: Uint8Array;
    headers: Map<string, string[]>;
    statusCode: number;
}
