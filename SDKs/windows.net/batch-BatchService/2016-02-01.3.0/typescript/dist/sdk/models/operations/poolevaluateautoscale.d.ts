import { SpeakeasyBase } from "../../../internal/utils";
export declare class PoolEvaluateAutoScalePathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PoolEvaluateAutoScaleQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class PoolEvaluateAutoScaleHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolEvaluateAutoScaleRequest extends SpeakeasyBase {
    pathParams: PoolEvaluateAutoScalePathParams;
    queryParams: PoolEvaluateAutoScaleQueryParams;
    headers: PoolEvaluateAutoScaleHeaders;
    request: any;
}
export declare class PoolEvaluateAutoScaleResponse extends SpeakeasyBase {
    autoScaleRun?: any;
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
