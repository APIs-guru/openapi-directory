import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addApplication - Create an application
     *
     * Application is a group of tiers. A tier is a group of virtual machines based on membership criteria. Tiers are bound to single
     * application. An application name is unique and should not conflict with another application name.
    **/
    addApplication(req: operations.AddApplicationRequest, config?: AxiosRequestConfig): Promise<operations.AddApplicationResponse>;
    /**
     * addTier - Create tier in application
     *
     * Create a tier of an application by with specified membership criteria. The membership criteria id defined in terms of
     * virtual machines or ip addresses/subnet. Please refer to API Guide on how to construct membership criteria.
    **/
    addTier(req: operations.AddTierRequest, config?: AxiosRequestConfig): Promise<operations.AddTierResponse>;
    /**
     * deleteApplication - Delete an application
     *
     * Deleting an application deletes all the tiers of the application along with the application
    **/
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * deleteTier - Delete tier
     *
     * Delete tier of an application
    **/
    deleteTier(req: operations.DeleteTierRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTierResponse>;
    /**
     * getApplication - Show application details
     *
     * Show application details
    **/
    getApplication(req: operations.GetApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationResponse>;
    /**
     * getApplicationTier - Show tier details
     *
     * Show tier details
    **/
    getApplicationTier(req: operations.GetApplicationTierRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationTierResponse>;
    /**
     * getTier - Show tier details
     *
     * Show tier details
    **/
    getTier(req: operations.GetTierRequest, config?: AxiosRequestConfig): Promise<operations.GetTierResponse>;
    /**
     * listApplicationTiers - List tiers of an application
     *
     * List tiers of an application
    **/
    listApplicationTiers(req: operations.ListApplicationTiersRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationTiersResponse>;
    /**
     * listApplications - List applications
     *
     * List applications
    **/
    listApplications(req: operations.ListApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
}
