import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelsCategories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addChannelCategories - Add a list of categories to a channel
     *
     * This method adds multiple categories to the specified channel.
    **/
    addChannelCategories(req: operations.AddChannelCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.AddChannelCategoriesResponse>;
    /**
     * categorizeChannel - Categorize a channel
     *
     * This method adds a channel to a category.
    **/
    categorizeChannel(req: operations.CategorizeChannelRequest, config?: AxiosRequestConfig): Promise<operations.CategorizeChannelResponse>;
    /**
     * deleteChannelCategory - Remove a category from a channel
     *
     * This method removes a single category from the specified channel.
    **/
    deleteChannelCategory(req: operations.DeleteChannelCategoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelCategoryResponse>;
    /**
     * getChannelCategories - Get all the categories in a channel
     *
     * This method gets all the categories in the specified channel.
    **/
    getChannelCategories(req: operations.GetChannelCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCategoriesResponse>;
}
