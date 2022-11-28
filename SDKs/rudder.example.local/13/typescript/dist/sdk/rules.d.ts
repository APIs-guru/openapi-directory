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
     * createRuleCategory - Create a rule category
     *
     * Create a new rule category
    **/
    createRuleCategory(req: operations.CreateRuleCategoryRequest, config?: AxiosRequestConfig): Promise<operations.CreateRuleCategoryResponse>;
    /**
     * deleteRuleCategory - Delete group category
     *
     * Delete a group category. It must have no child groups and no children categories.
    **/
    deleteRuleCategory(req: operations.DeleteRuleCategoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRuleCategoryResponse>;
    /**
     * getRuleCategoryDetails - Get rule category details
     *
     * Get detailed information about a rule category
    **/
    getRuleCategoryDetails(req: operations.GetRuleCategoryDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetRuleCategoryDetailsResponse>;
    /**
     * getRuleTree - Get rules tree
     *
     * Get all available rules and their categories in a tree
    **/
    getRuleTree(config?: AxiosRequestConfig): Promise<operations.GetRuleTreeResponse>;
    /**
     * updateRuleCategory - Update rule category details
     *
     * Update detailed information about a rule category
    **/
    updateRuleCategory(req: operations.UpdateRuleCategoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRuleCategoryResponse>;
    /**
     * createRule - Create a rule
     *
     * Create a new rule. You can specify a source rule to clone it.
    **/
    createRule(req: operations.CreateRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateRuleResponse>;
    /**
     * deleteRule - Delete a rule
     *
     * Delete a rule.
    **/
    deleteRule(req: operations.DeleteRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRuleResponse>;
    /**
     * listRules - List all rules
     *
     * List all rules
    **/
    listRules(config?: AxiosRequestConfig): Promise<operations.ListRulesResponse>;
    /**
     * ruleDetails - Get a rule details
     *
     * Get the details of a rule
    **/
    ruleDetails(req: operations.RuleDetailsRequest, config?: AxiosRequestConfig): Promise<operations.RuleDetailsResponse>;
    /**
     * updateRule - Update a rule details
     *
     * Update the details of a rule
    **/
    updateRule(req: operations.UpdateRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRuleResponse>;
}
