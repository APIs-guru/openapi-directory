import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tweets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * findTweetById - Returns hydrated Tweet objects
     *
     * Returns a variety of information about the Tweet specified by the requested ID
    **/
    findTweetById(req: operations.FindTweetByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindTweetByIdResponse>;
    /**
     * findTweetsById - Returns hydrated Tweet objects
     *
     * Returns a variety of information about the Tweet specified by the requested ID
    **/
    findTweetsById(req: operations.FindTweetsByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindTweetsByIdResponse>;
}
