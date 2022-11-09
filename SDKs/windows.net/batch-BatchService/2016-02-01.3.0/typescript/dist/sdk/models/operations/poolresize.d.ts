import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PoolResizePathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PoolResizeQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class PoolResizeHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolResizeRequest extends SpeakeasyBase {
    pathParams: PoolResizePathParams;
    queryParams: PoolResizeQueryParams;
    headers: PoolResizeHeaders;
    request: any;
}
export declare class PoolResizeResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
