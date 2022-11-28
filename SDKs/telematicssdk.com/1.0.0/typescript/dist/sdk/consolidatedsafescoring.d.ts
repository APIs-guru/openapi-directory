import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ConsolidatedSafeScoring {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * rootV1ScoringsConsolidated - /v1/Scorings/consolidated
     *
     * /v1/Scorings/consolidated
    **/
    rootV1ScoringsConsolidated(req: operations.RootV1ScoringsConsolidatedRequest, config?: AxiosRequestConfig): Promise<operations.RootV1ScoringsConsolidatedResponse>;
    /**
     * rootV1ScoringsConsolidatedDaily - /v1/Scorings/consolidated/daily
     *
     * /v1/Scorings/consolidated/daily
    **/
    rootV1ScoringsConsolidatedDaily(req: operations.RootV1ScoringsConsolidatedDailyRequest, config?: AxiosRequestConfig): Promise<operations.RootV1ScoringsConsolidatedDailyResponse>;
}
