import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VeteranConfirmationStatus {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getVeteranStatus - Get confirmation about an individual's Veteran status according to the VA
    **/
    getVeteranStatus(req: operations.GetVeteranStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetVeteranStatusResponse>;
}
