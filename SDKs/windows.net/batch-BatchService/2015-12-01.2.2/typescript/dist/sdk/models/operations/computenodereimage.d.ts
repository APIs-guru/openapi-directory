import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ComputeNodeReimagePathParams extends SpeakeasyBase {
    nodeId: string;
    poolId: string;
}
export declare class ComputeNodeReimageQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class ComputeNodeReimageHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class ComputeNodeReimageRequest extends SpeakeasyBase {
    pathParams: ComputeNodeReimagePathParams;
    queryParams: ComputeNodeReimageQueryParams;
    headers: ComputeNodeReimageHeaders;
    request?: any;
}
export declare class ComputeNodeReimageResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
