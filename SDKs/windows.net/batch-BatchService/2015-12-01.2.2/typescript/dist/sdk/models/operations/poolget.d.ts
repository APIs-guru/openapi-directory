import { SpeakeasyBase } from "../../../internal/utils";
export declare class PoolGetPathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PoolGetQueryParams extends SpeakeasyBase {
    dollarExpand?: string;
    dollarSelect?: string;
    apiVersion: string;
    timeout?: number;
}
export declare class PoolGetHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolGetRequest extends SpeakeasyBase {
    pathParams: PoolGetPathParams;
    queryParams: PoolGetQueryParams;
    headers: PoolGetHeaders;
}
export declare class PoolGetResponse extends SpeakeasyBase {
    batchError?: any;
    cloudPool?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
