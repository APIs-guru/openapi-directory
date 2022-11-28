import { SpeakeasyBase } from "../../../internal/utils";
export declare class PoolStopResizePathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PoolStopResizeQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class PoolStopResizeHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolStopResizeRequest extends SpeakeasyBase {
    pathParams: PoolStopResizePathParams;
    queryParams: PoolStopResizeQueryParams;
    headers: PoolStopResizeHeaders;
}
export declare class PoolStopResizeResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
