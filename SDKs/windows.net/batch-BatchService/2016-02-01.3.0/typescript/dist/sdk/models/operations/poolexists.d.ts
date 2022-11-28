import { SpeakeasyBase } from "../../../internal/utils";
export declare class PoolExistsPathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PoolExistsQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class PoolExistsHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolExistsRequest extends SpeakeasyBase {
    pathParams: PoolExistsPathParams;
    queryParams: PoolExistsQueryParams;
    headers: PoolExistsHeaders;
}
export declare class PoolExistsResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
