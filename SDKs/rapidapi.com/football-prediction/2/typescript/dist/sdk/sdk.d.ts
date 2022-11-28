import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://football-prediction-api.p.rapidapi.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getApiV2ListFederations - Returns an array of all the available federations.
    **/
    getApiV2ListFederations(req: operations.GetApiV2ListFederationsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2ListFederationsResponse>;
    /**
     * getApiV2ListMarkets - Returns an array of all the supported prediction markets
    **/
    getApiV2ListMarkets(req: operations.GetApiV2ListMarketsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2ListMarketsResponse>;
    /**
     * getApiV2PerformanceStats - Returns predictions accuracy in the last 1, 7, 14, 30 days.
    **/
    getApiV2PerformanceStats(req: operations.GetApiV2PerformanceStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2PerformanceStatsResponse>;
    /**
     * getApiV2Predictions - This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.
    **/
    getApiV2Predictions(req: operations.GetApiV2PredictionsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2PredictionsResponse>;
    /**
     * getApiV2PredictionsId - Returns all predictions available for a match id.
    **/
    getApiV2PredictionsId(req: operations.GetApiV2PredictionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2PredictionsIdResponse>;
}
export {};
