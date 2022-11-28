import { SpeakeasyBase } from "../../../internal/utils";
export declare class PoolPatchPathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PoolPatchQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class PoolPatchHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolPatchRequest extends SpeakeasyBase {
    pathParams: PoolPatchPathParams;
    queryParams: PoolPatchQueryParams;
    headers: PoolPatchHeaders;
    request: any;
}
export declare class PoolPatchResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
