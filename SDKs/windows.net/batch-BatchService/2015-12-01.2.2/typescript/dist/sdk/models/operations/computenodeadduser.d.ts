import { SpeakeasyBase } from "../../../internal/utils";
export declare class ComputeNodeAddUserPathParams extends SpeakeasyBase {
    nodeId: string;
    poolId: string;
}
export declare class ComputeNodeAddUserQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class ComputeNodeAddUserHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class ComputeNodeAddUserRequest extends SpeakeasyBase {
    pathParams: ComputeNodeAddUserPathParams;
    queryParams: ComputeNodeAddUserQueryParams;
    headers: ComputeNodeAddUserHeaders;
    request: any;
}
export declare class ComputeNodeAddUserResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
