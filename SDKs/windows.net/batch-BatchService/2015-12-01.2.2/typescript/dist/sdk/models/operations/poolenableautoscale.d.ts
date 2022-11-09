import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PoolEnableAutoScalePathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PoolEnableAutoScaleQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class PoolEnableAutoScaleHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolEnableAutoScaleRequest extends SpeakeasyBase {
    pathParams: PoolEnableAutoScalePathParams;
    queryParams: PoolEnableAutoScaleQueryParams;
    headers: PoolEnableAutoScaleHeaders;
    request: any;
}
export declare class PoolEnableAutoScaleResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
