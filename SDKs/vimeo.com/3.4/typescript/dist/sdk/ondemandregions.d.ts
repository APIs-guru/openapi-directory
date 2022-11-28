import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OnDemandRegions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVodRegion - Add a specific region to an On Demand page
    **/
    addVodRegion(req: operations.AddVodRegionRequest, config?: AxiosRequestConfig): Promise<operations.AddVodRegionResponse>;
    /**
     * deleteVodRegion - Remove a specific region from an On Demand page
    **/
    deleteVodRegion(req: operations.DeleteVodRegionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVodRegionResponse>;
    /**
     * deleteVodRegions - Remove a list of regions from an On Demand page
    **/
    deleteVodRegions(req: operations.DeleteVodRegionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVodRegionsResponse>;
    /**
     * getRegion - Get a specific On Demand region
    **/
    getRegion(req: operations.GetRegionRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionResponse>;
    /**
     * getRegions - Get all the On Demand regions
    **/
    getRegions(config?: AxiosRequestConfig): Promise<operations.GetRegionsResponse>;
    /**
     * getVodRegion - Get a specific region of an On Demand page
     *
     * Checks whether an On Demand page belongs to a region.
    **/
    getVodRegion(req: operations.GetVodRegionRequest, config?: AxiosRequestConfig): Promise<operations.GetVodRegionResponse>;
    /**
     * getVodRegions - Get all the regions of an On Demand page
    **/
    getVodRegions(req: operations.GetVodRegionsRequest, config?: AxiosRequestConfig): Promise<operations.GetVodRegionsResponse>;
    /**
     * setVodRegions - Add a list of regions to an On Demand page
    **/
    setVodRegions(req: operations.SetVodRegionsRequest, config?: AxiosRequestConfig): Promise<operations.SetVodRegionsResponse>;
}
