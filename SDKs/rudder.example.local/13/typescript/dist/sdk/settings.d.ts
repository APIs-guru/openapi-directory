import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Settings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAllSettings - List all settings
     *
     * Get the current value of all the settings
    **/
    getAllSettings(config?: AxiosRequestConfig): Promise<operations.GetAllSettingsResponse>;
    /**
     * getAllowedNetworks - Get allowed networks for a policy server
     *
     * Get the list of allowed networks for a policy server
    **/
    getAllowedNetworks(req: operations.GetAllowedNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetAllowedNetworksResponse>;
    /**
     * getSetting - Get the value of a setting
     *
     * Get the current value of a specific setting
    **/
    getSetting(req: operations.GetSettingRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingResponse>;
    /**
     * modifyAllowedNetworks - Modify allowed networks for a policy server
     *
     * Add or delete allowed networks for a policy server
    **/
    modifyAllowedNetworks(req: operations.ModifyAllowedNetworksRequest, config?: AxiosRequestConfig): Promise<operations.ModifyAllowedNetworksResponse>;
    /**
     * modifySetting - Set the value of a setting
     *
     * Set the current value of a specific setting
    **/
    modifySetting(req: operations.ModifySettingRequest, config?: AxiosRequestConfig): Promise<operations.ModifySettingResponse>;
    /**
     * setAllowedNetworks - Set allowed networks for a policy server
     *
     * Set the list of allowed networks for a policy server
    **/
    setAllowedNetworks(req: operations.SetAllowedNetworksRequest, config?: AxiosRequestConfig): Promise<operations.SetAllowedNetworksResponse>;
}
