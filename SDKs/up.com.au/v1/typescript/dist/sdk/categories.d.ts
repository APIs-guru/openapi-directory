import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Categories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCategories - List categories
     *
     * Retrieve a list of all categories and their ancestry. The returned list
     * is not paginated.
     *
    **/
    getCategories(req: operations.GetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    /**
     * getCategoriesId - Retrieve category
     *
     * Retrieve a specific category by providing its unique identifier.
     *
    **/
    getCategoriesId(req: operations.GetCategoriesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesIdResponse>;
}
