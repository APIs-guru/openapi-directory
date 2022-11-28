import { SpeakeasyBase } from "../../../internal/utils";
export declare class PoolRemoveNodesPathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PoolRemoveNodesQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class PoolRemoveNodesHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolRemoveNodesRequest extends SpeakeasyBase {
    pathParams: PoolRemoveNodesPathParams;
    queryParams: PoolRemoveNodesQueryParams;
    headers: PoolRemoveNodesHeaders;
    request: any;
}
export declare class PoolRemoveNodesResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
