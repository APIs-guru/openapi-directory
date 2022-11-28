import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OnDemandPosters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVodPoster - Add a poster to an On Demand page
    **/
    addVodPoster(req: operations.AddVodPosterRequest, config?: AxiosRequestConfig): Promise<operations.AddVodPosterResponse>;
    /**
     * editVodPoster - Edit a poster of an On Demand page
    **/
    editVodPoster(req: operations.EditVodPosterRequest, config?: AxiosRequestConfig): Promise<operations.EditVodPosterResponse>;
    /**
     * getVodPoster - Get a specific poster of an On Demand page
    **/
    getVodPoster(req: operations.GetVodPosterRequest, config?: AxiosRequestConfig): Promise<operations.GetVodPosterResponse>;
    /**
     * getVodPosters - Get all the posters of an On Demand page
    **/
    getVodPosters(req: operations.GetVodPostersRequest, config?: AxiosRequestConfig): Promise<operations.GetVodPostersResponse>;
}
