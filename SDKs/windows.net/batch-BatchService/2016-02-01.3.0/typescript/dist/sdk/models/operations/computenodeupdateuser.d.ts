import { SpeakeasyBase } from "../../../internal/utils";
export declare class ComputeNodeUpdateUserPathParams extends SpeakeasyBase {
    nodeId: string;
    poolId: string;
    userName: string;
}
export declare class ComputeNodeUpdateUserQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class ComputeNodeUpdateUserHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class ComputeNodeUpdateUserRequest extends SpeakeasyBase {
    pathParams: ComputeNodeUpdateUserPathParams;
    queryParams: ComputeNodeUpdateUserQueryParams;
    headers: ComputeNodeUpdateUserHeaders;
    request: any;
}
export declare class ComputeNodeUpdateUserResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
