import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Rules {
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
     * getRules - Returns rules from a user's active rule set.
     *
     * Returns rules from a user's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.
    **/
    getRules(req: operations.GetRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetRulesResponse>;
}
