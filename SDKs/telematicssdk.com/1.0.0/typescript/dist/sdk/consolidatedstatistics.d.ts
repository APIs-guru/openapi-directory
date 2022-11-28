import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ConsolidatedStatistics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * rootV1StatisticsConsolidated - /v1/Statistics/consolidated
     *
     * /v1/Statistics/consolidated
    **/
    rootV1StatisticsConsolidated(req: operations.RootV1StatisticsConsolidatedRequest, config?: AxiosRequestConfig): Promise<operations.RootV1StatisticsConsolidatedResponse>;
    /**
     * rootV1StatisticsConsolidatedDaily - /v1/Statistics/consolidated/daily
     *
     * /v1/Statistics/consolidated/daily
    **/
    rootV1StatisticsConsolidatedDaily(req: operations.RootV1StatisticsConsolidatedDailyRequest, config?: AxiosRequestConfig): Promise<operations.RootV1StatisticsConsolidatedDailyResponse>;
}
