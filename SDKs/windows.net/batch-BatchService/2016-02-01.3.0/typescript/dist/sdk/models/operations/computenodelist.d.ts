import { SpeakeasyBase } from "../../../internal/utils";
export declare class ComputeNodeListPathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class ComputeNodeListQueryParams extends SpeakeasyBase {
    dollarFilter?: string;
    dollarSelect?: string;
    apiVersion: string;
    maxresults?: number;
    timeout?: number;
}
export declare class ComputeNodeListHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class ComputeNodeListRequest extends SpeakeasyBase {
    pathParams: ComputeNodeListPathParams;
    queryParams: ComputeNodeListQueryParams;
    headers: ComputeNodeListHeaders;
}
export declare class ComputeNodeListResponse extends SpeakeasyBase {
    batchError?: any;
    computeNodeListResult?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
