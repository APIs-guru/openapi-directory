import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UsersWatchHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteFromWatchHistory - Delete a specific video from a user's watch history
    **/
    deleteFromWatchHistory(req: operations.DeleteFromWatchHistoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFromWatchHistoryResponse>;
    /**
     * deleteWatchHistory - Delete a user's watch history
    **/
    deleteWatchHistory(req: operations.DeleteWatchHistoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWatchHistoryResponse>;
    /**
     * getWatchHistory - Get all the videos that a user has watched
    **/
    getWatchHistory(req: operations.GetWatchHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetWatchHistoryResponse>;
}
