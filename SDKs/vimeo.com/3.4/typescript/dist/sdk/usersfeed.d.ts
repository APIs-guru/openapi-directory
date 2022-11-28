import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UsersFeed {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFeed - Get all videos in a user's feed
    **/
    getFeed(req: operations.GetFeedRequest, config?: AxiosRequestConfig): Promise<operations.GetFeedResponse>;
    /**
     * getFeedAlt1 - Get all videos in a user's feed
    **/
    getFeedAlt1(req: operations.GetFeedAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetFeedAlt1Response>;
}
