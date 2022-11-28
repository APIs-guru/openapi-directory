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
     * addOrDeleteRules - Add or delete rules from a user's active rule set.
     *
     * Add or delete rules from a user's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.
    **/
    addOrDeleteRules(req: operations.AddOrDeleteRulesRequest, config?: AxiosRequestConfig): Promise<operations.AddOrDeleteRulesResponse>;
    /**
     * findPrivateTweetMetricsById - Returns private metrics corresponding to a Tweet
     *
     * Returns various metrics about a Tweet, including metrics for an embedded Video if one exists
    **/
    findPrivateTweetMetricsById(req: operations.FindPrivateTweetMetricsByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindPrivateTweetMetricsByIdResponse>;
    /**
     * getRules - Returns rules from a user's active rule set.
     *
     * Returns rules from a user's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.
    **/
    getRules(req: operations.GetRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetRulesResponse>;
    /**
     * streamFilter - Streams tweets matching a user's active rule set.
     *
     * Streams tweets matching a user's active rule set.
    **/
    streamFilter(req: operations.StreamFilterRequest, config?: AxiosRequestConfig): Promise<operations.StreamFilterResponse>;
    /**
     * streamSample - Streams a deterministic 1% of public tweets.
     *
     * Streams a deterministic 1% of public tweets.
    **/
    streamSample(req: operations.StreamSampleRequest, config?: AxiosRequestConfig): Promise<operations.StreamSampleResponse>;
}
