import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PatrowlEngine {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cleanScanPage - Clean scan
     *
     * Clean scan identified by id.
    **/
    cleanScanPage(req: operations.CleanScanPageRequest, config?: AxiosRequestConfig): Promise<operations.CleanScanPageResponse>;
    /**
     * cleanScansPage - Clean all scans
     *
     * Clean all current scans.
    **/
    cleanScansPage(config?: AxiosRequestConfig): Promise<operations.CleanScansPageResponse>;
    /**
     * getFindingPage - Get findings on finished scans
     *
     * Get findings on finished scans.
    **/
    getFindingPage(req: operations.GetFindingPageRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingPageResponse>;
    /**
     * startScanPage - Start a new scan
     *
     * Start a new scan.
    **/
    startScanPage(req: operations.StartScanPageRequest, config?: AxiosRequestConfig): Promise<operations.StartScanPageResponse>;
    /**
     * statusScanPage - Status of a scan
     *
     * Status of a scan identified by id.
    **/
    statusScanPage(req: operations.StatusScanPageRequest, config?: AxiosRequestConfig): Promise<operations.StatusScanPageResponse>;
    /**
     * statusScansPage - Status on all scans
     *
     * Status all current scans.
    **/
    statusScansPage(config?: AxiosRequestConfig): Promise<operations.StatusScansPageResponse>;
    /**
     * stopScanPage - Stop a scan
     *
     * Stop a scan identified by id.
    **/
    stopScanPage(req: operations.StopScanPageRequest, config?: AxiosRequestConfig): Promise<operations.StopScanPageResponse>;
    /**
     * stopScansPage - Stop all scans
     *
     * Stop all current scans.
    **/
    stopScansPage(config?: AxiosRequestConfig): Promise<operations.StopScansPageResponse>;
    /**
     * getDefaultPage - Index page
     *
     * Return index page
    **/
    getDefaultPage(config?: AxiosRequestConfig): Promise<operations.GetDefaultPageResponse>;
    /**
     * getInfoPage - Engine info page
     *
     * Return information on engine.
    **/
    getInfoPage(config?: AxiosRequestConfig): Promise<operations.GetInfoPageResponse>;
    /**
     * getLivenessPage - Liveness page
     *
     * Return liveness page
    **/
    getLivenessPage(config?: AxiosRequestConfig): Promise<operations.GetLivenessPageResponse>;
    /**
     * getReadinessPage - Readiness page
     *
     * Return liveness page
    **/
    getReadinessPage(config?: AxiosRequestConfig): Promise<operations.GetReadinessPageResponse>;
    /**
     * getTestPage - Test page
     *
     * Return test page
    **/
    getTestPage(config?: AxiosRequestConfig): Promise<operations.GetTestPageResponse>;
    /**
     * reloadConfigurationPage - Configuration reloading page
     *
     * Reload the configuration file.
    **/
    reloadConfigurationPage(config?: AxiosRequestConfig): Promise<operations.ReloadConfigurationPageResponse>;
}
