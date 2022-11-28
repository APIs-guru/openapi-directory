import { SpeakeasyBase } from "../../../internal/utils";
export declare class ComputeNodeEnableSchedulingPathParams extends SpeakeasyBase {
    nodeId: string;
    poolId: string;
}
export declare class ComputeNodeEnableSchedulingQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class ComputeNodeEnableSchedulingHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class ComputeNodeEnableSchedulingRequest extends SpeakeasyBase {
    pathParams: ComputeNodeEnableSchedulingPathParams;
    queryParams: ComputeNodeEnableSchedulingQueryParams;
    headers: ComputeNodeEnableSchedulingHeaders;
}
export declare class ComputeNodeEnableSchedulingResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
