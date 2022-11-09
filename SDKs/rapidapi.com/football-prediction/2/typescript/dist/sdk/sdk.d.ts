import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    GetApiV2ListFederations(req: operations.GetApiV2ListFederationsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2ListFederationsResponse>;
    GetApiV2ListMarkets(req: operations.GetApiV2ListMarketsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2ListMarketsResponse>;
    GetApiV2PerformanceStats(req: operations.GetApiV2PerformanceStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2PerformanceStatsResponse>;
    GetApiV2Predictions(req: operations.GetApiV2PredictionsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2PredictionsResponse>;
    GetApiV2PredictionsId(req: operations.GetApiV2PredictionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2PredictionsIdResponse>;
}
export {};
