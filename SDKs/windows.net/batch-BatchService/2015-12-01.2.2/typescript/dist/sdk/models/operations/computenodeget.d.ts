import { SpeakeasyBase } from "../../../internal/utils";
export declare class ComputeNodeGetPathParams extends SpeakeasyBase {
    nodeId: string;
    poolId: string;
}
export declare class ComputeNodeGetQueryParams extends SpeakeasyBase {
    dollarSelect?: string;
    apiVersion: string;
    timeout?: number;
}
export declare class ComputeNodeGetHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class ComputeNodeGetRequest extends SpeakeasyBase {
    pathParams: ComputeNodeGetPathParams;
    queryParams: ComputeNodeGetQueryParams;
    headers: ComputeNodeGetHeaders;
}
export declare class ComputeNodeGetResponse extends SpeakeasyBase {
    batchError?: any;
    computeNode?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
