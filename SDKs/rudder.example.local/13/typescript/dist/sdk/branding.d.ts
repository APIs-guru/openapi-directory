import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Branding {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBrandingConf - Get branding configuration
     *
     * Get all web interface customization parameters
    **/
    getBrandingConf(config?: AxiosRequestConfig): Promise<operations.GetBrandingConfResponse>;
    /**
     * reloadBrandingConf - Reload branding file
     *
     * Reload the configuration from file
    **/
    reloadBrandingConf(config?: AxiosRequestConfig): Promise<operations.ReloadBrandingConfResponse>;
    /**
     * updateBRandingConf - Update web interface customization
     *
     * change color, logo, label etc.
    **/
    updateBRandingConf(req: operations.UpdateBRandingConfRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBRandingConfResponse>;
}
