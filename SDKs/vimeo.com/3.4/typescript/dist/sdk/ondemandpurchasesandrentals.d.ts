import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OnDemandPurchasesAndRentals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkIfVodWasPurchased - Check if a user has made a purchase or rental from an On Demand page
    **/
    checkIfVodWasPurchased(req: operations.CheckIfVodWasPurchasedRequest, config?: AxiosRequestConfig): Promise<operations.CheckIfVodWasPurchasedResponse>;
    /**
     * checkIfVodWasPurchasedAlt1 - Check if a user has made a purchase or rental from an On Demand page
    **/
    checkIfVodWasPurchasedAlt1(req: operations.CheckIfVodWasPurchasedAlt1Request, config?: AxiosRequestConfig): Promise<operations.CheckIfVodWasPurchasedAlt1Response>;
    /**
     * getVodPurchases - Get all the On Demand purchases and rentals that a user has made
    **/
    getVodPurchases(req: operations.GetVodPurchasesRequest, config?: AxiosRequestConfig): Promise<operations.GetVodPurchasesResponse>;
}
