import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ComputeNodeDisableSchedulingPathParams extends SpeakeasyBase {
    nodeId: string;
    poolId: string;
}
export declare class ComputeNodeDisableSchedulingQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class ComputeNodeDisableSchedulingHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class ComputeNodeDisableSchedulingRequest extends SpeakeasyBase {
    pathParams: ComputeNodeDisableSchedulingPathParams;
    queryParams: ComputeNodeDisableSchedulingQueryParams;
    headers: ComputeNodeDisableSchedulingHeaders;
    request?: any;
}
export declare class ComputeNodeDisableSchedulingResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
