import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchEntities - Search entities
     *
     * Using search API you can search vRealize Network Insight entities by specifying entity type and filter expression.
     * A filter expression is a predicate expression (similar to SQL where clause) used to define the search criteria.
     * Please refer to API Guide on details of how to construct filter expression. A successful search request will return a
     * list of entity ids that matches the search criteria.
    **/
    searchEntities(req: operations.SearchEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.SearchEntitiesResponse>;
}
