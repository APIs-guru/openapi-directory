import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Campaigns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * campaignsCreate - Create campaign
    **/
    campaignsCreate(req: operations.CampaignsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CampaignsCreateResponse>;
    /**
     * campaignsFetch - Fetch campaign by ID
    **/
    campaignsFetch(req: operations.CampaignsFetchRequest, config?: AxiosRequestConfig): Promise<operations.CampaignsFetchResponse>;
    /**
     * campaignsFetchAll - Fetch campaigns
    **/
    campaignsFetchAll(req: operations.CampaignsFetchAllRequest, config?: AxiosRequestConfig): Promise<operations.CampaignsFetchAllResponse>;
    /**
     * campaignsRemove - Deletes a campaign
    **/
    campaignsRemove(req: operations.CampaignsRemoveRequest, config?: AxiosRequestConfig): Promise<operations.CampaignsRemoveResponse>;
    /**
     * campaignsUpdate - Updates a campaign
    **/
    campaignsUpdate(req: operations.CampaignsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CampaignsUpdateResponse>;
}
