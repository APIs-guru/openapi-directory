import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Compliance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGlobalCompliance - Global compliance
     *
     * Get current global compliance of a Rudder server
    **/
    getGlobalCompliance(config?: AxiosRequestConfig): Promise<operations.GetGlobalComplianceResponse>;
    /**
     * getNodeCompliance - Compliance details by node
     *
     * Get current compliance of a node of a Rudder server
    **/
    getNodeCompliance(req: operations.GetNodeComplianceRequest, config?: AxiosRequestConfig): Promise<operations.GetNodeComplianceResponse>;
    /**
     * getNodesCompliance - Compliance details for all nodes
     *
     * Get current compliance of all the nodes of a Rudder server
    **/
    getNodesCompliance(req: operations.GetNodesComplianceRequest, config?: AxiosRequestConfig): Promise<operations.GetNodesComplianceResponse>;
    /**
     * getRuleCompliance - Compliance details by rule
     *
     * Get current compliance of a rule of a Rudder server
    **/
    getRuleCompliance(req: operations.GetRuleComplianceRequest, config?: AxiosRequestConfig): Promise<operations.GetRuleComplianceResponse>;
    /**
     * getRulesCompliance - Compliance details for all rules
     *
     * Get current compliance of all the rules of a Rudder server
    **/
    getRulesCompliance(req: operations.GetRulesComplianceRequest, config?: AxiosRequestConfig): Promise<operations.GetRulesComplianceResponse>;
}
