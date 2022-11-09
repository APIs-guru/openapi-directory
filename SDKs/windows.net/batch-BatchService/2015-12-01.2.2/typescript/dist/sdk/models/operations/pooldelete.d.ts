import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PoolDeletePathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PoolDeleteQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class PoolDeleteHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolDeleteRequest extends SpeakeasyBase {
    pathParams: PoolDeletePathParams;
    queryParams: PoolDeleteQueryParams;
    headers: PoolDeleteHeaders;
}
export declare class PoolDeleteResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
