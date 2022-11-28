import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OnDemandBackgrounds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createVodBackground - Add a background to an On Demand page
    **/
    createVodBackground(req: operations.CreateVodBackgroundRequest, config?: AxiosRequestConfig): Promise<operations.CreateVodBackgroundResponse>;
    /**
     * deleteVodBackground - Remove a background from an On Demand page
    **/
    deleteVodBackground(req: operations.DeleteVodBackgroundRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVodBackgroundResponse>;
    /**
     * editVodBackground - Edit a background of an On Demand page
    **/
    editVodBackground(req: operations.EditVodBackgroundRequest, config?: AxiosRequestConfig): Promise<operations.EditVodBackgroundResponse>;
    /**
     * getVodBackground - Get a specific background of an On Demand page
    **/
    getVodBackground(req: operations.GetVodBackgroundRequest, config?: AxiosRequestConfig): Promise<operations.GetVodBackgroundResponse>;
    /**
     * getVodBackgrounds - Get all the backgrounds of an On Demand page
    **/
    getVodBackgrounds(req: operations.GetVodBackgroundsRequest, config?: AxiosRequestConfig): Promise<operations.GetVodBackgroundsResponse>;
}
