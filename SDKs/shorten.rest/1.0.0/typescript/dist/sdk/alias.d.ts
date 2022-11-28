import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Alias {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAlias - Create alias
     *
     * This POST method creates a new alias under a specified domain. If no domain is specified in the request the alias will be attached to the default domain Short.fyi
     *
     *  **NOTE:** You can override the domain level Meta Tags and Tracking Snippets by specifying them for each URL. Any variables you add to a specific URL will always override domain level settings.
    **/
    createAlias(req: operations.CreateAliasRequest, config?: AxiosRequestConfig): Promise<operations.CreateAliasResponse>;
    /**
     * deleteAlias - Delete alias
     *
     * Deletes a single alias by providing alias and domain. If no domain is provided the API will search for the matching alias within the Short.fyi domain
    **/
    deleteAlias(req: operations.DeleteAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAliasResponse>;
    /**
     * getAlias - Get alias
     *
     * Get detailed information for a single alias by providing its alias and domain name
    **/
    getAlias(req: operations.GetAliasRequest, config?: AxiosRequestConfig): Promise<operations.GetAliasResponse>;
    /**
     * getAliases - Get aliases by domain
     *
     * Obtain a list of all alias names associated with your account and given domain. Result array is in descending order by creation date.
     *
     *  If no domain is specified you will receive a list of all the alias names you have created using the Short.fyi domain.
     *
     *  If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.
    **/
    getAliases(req: operations.GetAliasesRequest, config?: AxiosRequestConfig): Promise<operations.GetAliasesResponse>;
    /**
     * updateAlias - Update alias
     *
     * Update a single short URL by providing its alias and domain as a parameter, and the data you wish to update in the body of the request. If no domain is provided you will receive the alias found attached to the Short.fyi domain (if it exists and is linked to your account!)
     *
     *  ### NOTE:
     *
     *  ( * )If you add a metatag or a snippet with a same name to an alias and the domain it's related to, the value will be taken from the alias and not the domain
     *
     *  ( ** ) When you update any array property (like destinations) the block is updated **completely** so you have to specify the old records to avoid deleting them
     *
     *  ( *** ) The method updates only the specified properties so if there was no change in one of them you don't have to send it.
    **/
    updateAlias(req: operations.UpdateAliasRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAliasResponse>;
}
