import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PoolUpgradeOsPathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PoolUpgradeOsQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class PoolUpgradeOsHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolUpgradeOsRequest extends SpeakeasyBase {
    pathParams: PoolUpgradeOsPathParams;
    queryParams: PoolUpgradeOsQueryParams;
    headers: PoolUpgradeOsHeaders;
    request: any;
}
export declare class PoolUpgradeOsResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
