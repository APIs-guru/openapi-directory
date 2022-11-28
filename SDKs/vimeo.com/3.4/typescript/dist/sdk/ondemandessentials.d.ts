import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OnDemandEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createVod - Create an On Demand page
    **/
    createVod(req: operations.CreateVodRequest, config?: AxiosRequestConfig): Promise<operations.CreateVodResponse>;
    /**
     * createVodAlt1 - Create an On Demand page
    **/
    createVodAlt1(req: operations.CreateVodAlt1Request, config?: AxiosRequestConfig): Promise<operations.CreateVodAlt1Response>;
    /**
     * deleteVodDraft - Delete a draft of an On Demand page
    **/
    deleteVodDraft(req: operations.DeleteVodDraftRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVodDraftResponse>;
    /**
     * editVod - Edit an On Demand page
     *
     * Enable preorders or publish the page.
    **/
    editVod(req: operations.EditVodRequest, config?: AxiosRequestConfig): Promise<operations.EditVodResponse>;
    /**
     * getUserVods - Get all the On Demand pages of a user
    **/
    getUserVods(req: operations.GetUserVodsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserVodsResponse>;
    /**
     * getUserVodsAlt1 - Get all the On Demand pages of a user
    **/
    getUserVodsAlt1(req: operations.GetUserVodsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetUserVodsAlt1Response>;
    /**
     * getVod - Get a specific On Demand page
    **/
    getVod(req: operations.GetVodRequest, config?: AxiosRequestConfig): Promise<operations.GetVodResponse>;
}
