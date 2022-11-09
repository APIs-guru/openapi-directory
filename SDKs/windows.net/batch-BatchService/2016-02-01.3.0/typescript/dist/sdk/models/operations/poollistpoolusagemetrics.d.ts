import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PoolListPoolUsageMetricsQueryParams extends SpeakeasyBase {
    dollarFilter?: string;
    apiVersion: string;
    endtime?: Date;
    maxresults?: number;
    starttime?: Date;
    timeout?: number;
}
export declare class PoolListPoolUsageMetricsHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolListPoolUsageMetricsRequest extends SpeakeasyBase {
    queryParams: PoolListPoolUsageMetricsQueryParams;
    headers: PoolListPoolUsageMetricsHeaders;
}
export declare class PoolListPoolUsageMetricsResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    poolListPoolUsageMetricsResult?: any;
    statusCode: number;
}
