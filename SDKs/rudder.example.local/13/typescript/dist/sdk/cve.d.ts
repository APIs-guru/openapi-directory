import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cve {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkCve - Trigger a CVE check
     *
     * Trigger a CVE check
    **/
    checkCve(config?: AxiosRequestConfig): Promise<operations.CheckCveResponse>;
    /**
     * getAllCve - Get all CVE details
     *
     * Get all CVE details
    **/
    getAllCve(config?: AxiosRequestConfig): Promise<operations.GetAllCveResponse>;
    /**
     * getCveCheckConfiguration - Get CVE check config
     *
     * Get CVE check config
    **/
    getCveCheckConfiguration(config?: AxiosRequestConfig): Promise<operations.GetCveCheckConfigurationResponse>;
    /**
     * getCveList - Get a list of CVE details
     *
     * Get CVE details, from a list passed a paremeter
    **/
    getCveList(req: operations.GetCveListRequest, config?: AxiosRequestConfig): Promise<operations.GetCveListResponse>;
    /**
     * getLastCveCheck - Get last CVE check result
     *
     * Get last CVE check result
    **/
    getLastCveCheck(config?: AxiosRequestConfig): Promise<operations.GetLastCveCheckResponse>;
    /**
     * readCvEfromFs - Update CVE database from file system
     *
     * Update CVE database from file system
    **/
    readCvEfromFs(config?: AxiosRequestConfig): Promise<operations.ReadCvEfromFsResponse>;
    /**
     * updateCve - Update CVE database from remote source
     *
     * Update CVE database from remote source
    **/
    updateCve(req: operations.UpdateCveRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCveResponse>;
    /**
     * updateCveCheckConfiguration - Update cve check config
     *
     * Update cve check config
    **/
    updateCveCheckConfiguration(req: operations.UpdateCveCheckConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCveCheckConfigurationResponse>;
}
