import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoriesEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCategories - Get all categories
     *
     * This method gets all existing categories.
    **/
    getCategories(req: operations.GetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    /**
     * getCategory - Get a specific category
    **/
    getCategory(req: operations.GetCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryResponse>;
}
