import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoriesSubscriptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkIfUserSubscribedToCategory - Check if a user follows a category
    **/
    checkIfUserSubscribedToCategory(req: operations.CheckIfUserSubscribedToCategoryRequest, config?: AxiosRequestConfig): Promise<operations.CheckIfUserSubscribedToCategoryResponse>;
    /**
     * checkIfUserSubscribedToCategoryAlt1 - Check if a user follows a category
    **/
    checkIfUserSubscribedToCategoryAlt1(req: operations.CheckIfUserSubscribedToCategoryAlt1Request, config?: AxiosRequestConfig): Promise<operations.CheckIfUserSubscribedToCategoryAlt1Response>;
    /**
     * getCategorySubscriptions - Get all the categories that a user follows
    **/
    getCategorySubscriptions(req: operations.GetCategorySubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCategorySubscriptionsResponse>;
    /**
     * getCategorySubscriptionsAlt1 - Get all the categories that a user follows
    **/
    getCategorySubscriptionsAlt1(req: operations.GetCategorySubscriptionsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetCategorySubscriptionsAlt1Response>;
    /**
     * subscribeToCategory - Subscribe a user to a single category
    **/
    subscribeToCategory(req: operations.SubscribeToCategoryRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeToCategoryResponse>;
    /**
     * subscribeToCategoryAlt1 - Subscribe a user to a single category
    **/
    subscribeToCategoryAlt1(req: operations.SubscribeToCategoryAlt1Request, config?: AxiosRequestConfig): Promise<operations.SubscribeToCategoryAlt1Response>;
    /**
     * unsubscribeFromCategory - Unsubscribe a user from a category
    **/
    unsubscribeFromCategory(req: operations.UnsubscribeFromCategoryRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeFromCategoryResponse>;
    /**
     * unsubscribeFromCategoryAlt1 - Unsubscribe a user from a category
    **/
    unsubscribeFromCategoryAlt1(req: operations.UnsubscribeFromCategoryAlt1Request, config?: AxiosRequestConfig): Promise<operations.UnsubscribeFromCategoryAlt1Response>;
}
