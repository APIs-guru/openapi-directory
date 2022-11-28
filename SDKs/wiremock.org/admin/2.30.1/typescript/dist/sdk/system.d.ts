import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class System {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postAdminReset - Reset mappings and request journal
     *
     * Reset mappings to the default state and reset the request journal
    **/
    postAdminReset(config?: AxiosRequestConfig): Promise<operations.PostAdminResetResponse>;
    /**
     * postAdminSettings - Update global settings
    **/
    postAdminSettings(req: operations.PostAdminSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminSettingsResponse>;
    /**
     * postAdminShutdown - Shutdown the WireMock server
    **/
    postAdminShutdown(config?: AxiosRequestConfig): Promise<operations.PostAdminShutdownResponse>;
}
