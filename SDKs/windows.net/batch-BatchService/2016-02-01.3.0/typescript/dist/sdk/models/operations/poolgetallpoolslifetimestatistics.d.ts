import { SpeakeasyBase } from "../../../internal/utils";
export declare class PoolGetAllPoolsLifetimeStatisticsQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class PoolGetAllPoolsLifetimeStatisticsHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolGetAllPoolsLifetimeStatisticsRequest extends SpeakeasyBase {
    queryParams: PoolGetAllPoolsLifetimeStatisticsQueryParams;
    headers: PoolGetAllPoolsLifetimeStatisticsHeaders;
}
export declare class PoolGetAllPoolsLifetimeStatisticsResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    poolStatistics?: any;
    statusCode: number;
}
