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
    /**
     * Add or delete rules from a user's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.
    **/
    AddOrDeleteRules(req: operations.AddOrDeleteRulesRequest, config?: AxiosRequestConfig): Promise<operations.AddOrDeleteRulesResponse>;
    /**
     * Returns various metrics about a Tweet, including metrics for an embedded Video if one exists
    **/
    FindPrivateTweetMetricsById(req: operations.FindPrivateTweetMetricsByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindPrivateTweetMetricsByIdResponse>;
    /**
     * Full open api spec in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)
    **/
    GetOpenApiSpec(config?: AxiosRequestConfig): Promise<operations.GetOpenApiSpecResponse>;
    /**
     * Returns rules from a user's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.
    **/
    GetRules(req: operations.GetRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetRulesResponse>;
    /**
     * Streams tweets matching a user's active rule set.
    **/
    StreamFilter(req: operations.StreamFilterRequest, config?: AxiosRequestConfig): Promise<operations.StreamFilterResponse>;
    /**
     * Streams a deterministic 1% of public tweets.
    **/
    StreamSample(req: operations.StreamSampleRequest, config?: AxiosRequestConfig): Promise<operations.StreamSampleResponse>;
}
export {};
