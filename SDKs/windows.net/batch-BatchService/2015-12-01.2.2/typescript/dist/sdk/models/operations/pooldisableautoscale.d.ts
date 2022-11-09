import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PoolDisableAutoScalePathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PoolDisableAutoScaleQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class PoolDisableAutoScaleHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolDisableAutoScaleRequest extends SpeakeasyBase {
    pathParams: PoolDisableAutoScalePathParams;
    queryParams: PoolDisableAutoScaleQueryParams;
    headers: PoolDisableAutoScaleHeaders;
}
export declare class PoolDisableAutoScaleResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
