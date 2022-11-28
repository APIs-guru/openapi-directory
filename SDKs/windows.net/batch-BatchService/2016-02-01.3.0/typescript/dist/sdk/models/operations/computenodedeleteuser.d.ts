import { SpeakeasyBase } from "../../../internal/utils";
export declare class ComputeNodeDeleteUserPathParams extends SpeakeasyBase {
    nodeId: string;
    poolId: string;
    userName: string;
}
export declare class ComputeNodeDeleteUserQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class ComputeNodeDeleteUserHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class ComputeNodeDeleteUserRequest extends SpeakeasyBase {
    pathParams: ComputeNodeDeleteUserPathParams;
    queryParams: ComputeNodeDeleteUserQueryParams;
    headers: ComputeNodeDeleteUserHeaders;
}
export declare class ComputeNodeDeleteUserResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
