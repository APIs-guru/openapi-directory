import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoriesGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCategoryGroups - Get all the groups in a category
    **/
    getCategoryGroups(req: operations.GetCategoryGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryGroupsResponse>;
}
