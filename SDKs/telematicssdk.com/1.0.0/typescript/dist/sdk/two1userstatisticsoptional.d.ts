import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Two1UserStatisticsOptional {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * userStatisticeDailyValueV1StatisticsIndividualDaily - User statistice - Daily value - v1/Statistics/individual/daily
     *
     * User statistice - Daily value - v1/Statistics/individual/daily
    **/
    userStatisticeDailyValueV1StatisticsIndividualDaily(req: operations.UserStatisticeDailyValueV1StatisticsIndividualDailyRequest, config?: AxiosRequestConfig): Promise<operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse>;
    /**
     * userStatisticsAccumulatedValueV1StatisticsIndividual - User statistics - Accumulated value - /v1/Statistics/individual
     *
     * User statistics - Accumulated value - /v1/Statistics/individual
    **/
    userStatisticsAccumulatedValueV1StatisticsIndividual(req: operations.UserStatisticsAccumulatedValueV1StatisticsIndividualRequest, config?: AxiosRequestConfig): Promise<operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse>;
}
