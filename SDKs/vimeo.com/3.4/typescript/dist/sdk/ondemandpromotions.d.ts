import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OnDemandPromotions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createVodPromotion - Add a promotion to an On Demand page
    **/
    createVodPromotion(req: operations.CreateVodPromotionRequest, config?: AxiosRequestConfig): Promise<operations.CreateVodPromotionResponse>;
    /**
     * deleteVodPromotion - Remove a promotion from an On Demand page
    **/
    deleteVodPromotion(req: operations.DeleteVodPromotionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVodPromotionResponse>;
    /**
     * getVodPromotion - Get a specific promotion on an On Demand page
    **/
    getVodPromotion(req: operations.GetVodPromotionRequest, config?: AxiosRequestConfig): Promise<operations.GetVodPromotionResponse>;
    /**
     * getVodPromotionCodes - Get all the codes of a promotion on an On Demand page
    **/
    getVodPromotionCodes(req: operations.GetVodPromotionCodesRequest, config?: AxiosRequestConfig): Promise<operations.GetVodPromotionCodesResponse>;
    /**
     * getVodPromotions - Get all the promotions on an On Demand page
    **/
    getVodPromotions(req: operations.GetVodPromotionsRequest, config?: AxiosRequestConfig): Promise<operations.GetVodPromotionsResponse>;
}
