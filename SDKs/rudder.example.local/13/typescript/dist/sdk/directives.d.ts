import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Directives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkDirective - Check that update on a directive is valid
     *
     * Check that update on a directive is valid
    **/
    checkDirective(req: operations.CheckDirectiveRequest, config?: AxiosRequestConfig): Promise<operations.CheckDirectiveResponse>;
    /**
     * createDirective - Create a directive
     *
     * Create a new directive from provided parameters. You can specify a source directive to clone it.
    **/
    createDirective(req: operations.CreateDirectiveRequest, config?: AxiosRequestConfig): Promise<operations.CreateDirectiveResponse>;
    /**
     * deleteDirective - Delete a directive
     *
     * Delete a directive
    **/
    deleteDirective(req: operations.DeleteDirectiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDirectiveResponse>;
    /**
     * directiveDetails - Get directive details
     *
     * Get all information about a given directive
    **/
    directiveDetails(req: operations.DirectiveDetailsRequest, config?: AxiosRequestConfig): Promise<operations.DirectiveDetailsResponse>;
    /**
     * listDirectives - List all directives
     *
     * List all directives
    **/
    listDirectives(config?: AxiosRequestConfig): Promise<operations.ListDirectivesResponse>;
    /**
     * updateDirective - Update a directive details
     *
     * Update directive information
    **/
    updateDirective(req: operations.UpdateDirectiveRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDirectiveResponse>;
}
