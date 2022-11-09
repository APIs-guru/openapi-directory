import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ComputeNodeRebootPathParams extends SpeakeasyBase {
    nodeId: string;
    poolId: string;
}
export declare class ComputeNodeRebootQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class ComputeNodeRebootHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class ComputeNodeRebootRequest extends SpeakeasyBase {
    pathParams: ComputeNodeRebootPathParams;
    queryParams: ComputeNodeRebootQueryParams;
    headers: ComputeNodeRebootHeaders;
    request?: any;
}
export declare class ComputeNodeRebootResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
