import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoriesChannels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCategoryChannels - Get all the channels in a category
    **/
    getCategoryChannels(req: operations.GetCategoryChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryChannelsResponse>;
}
