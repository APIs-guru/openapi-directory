import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class FileGetNodeFilePropertiesFromComputeNodePathParams extends SpeakeasyBase {
    fileName: string;
    nodeId: string;
    poolId: string;
}
export declare class FileGetNodeFilePropertiesFromComputeNodeQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class FileGetNodeFilePropertiesFromComputeNodeHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class FileGetNodeFilePropertiesFromComputeNodeRequest extends SpeakeasyBase {
    pathParams: FileGetNodeFilePropertiesFromComputeNodePathParams;
    queryParams: FileGetNodeFilePropertiesFromComputeNodeQueryParams;
    headers: FileGetNodeFilePropertiesFromComputeNodeHeaders;
}
export declare class FileGetNodeFilePropertiesFromComputeNodeResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
