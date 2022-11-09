import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Clean scan identified by id.
    **/
    CleanScanPage(req: operations.CleanScanPageRequest, config?: AxiosRequestConfig): Promise<operations.CleanScanPageResponse>;
    /**
     * Clean all current scans.
    **/
    CleanScansPage(config?: AxiosRequestConfig): Promise<operations.CleanScansPageResponse>;
    /**
     * Get findings on finished scans.
    **/
    GetFindingPage(req: operations.GetFindingPageRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingPageResponse>;
    /**
     * Start a new scan.
    **/
    StartScanPage(req: operations.StartScanPageRequest, config?: AxiosRequestConfig): Promise<operations.StartScanPageResponse>;
    /**
     * Status of a scan identified by id.
    **/
    StatusScanPage(req: operations.StatusScanPageRequest, config?: AxiosRequestConfig): Promise<operations.StatusScanPageResponse>;
    /**
     * Status all current scans.
    **/
    StatusScansPage(config?: AxiosRequestConfig): Promise<operations.StatusScansPageResponse>;
    /**
     * Stop a scan identified by id.
    **/
    StopScanPage(req: operations.StopScanPageRequest, config?: AxiosRequestConfig): Promise<operations.StopScanPageResponse>;
    /**
     * Stop all current scans.
    **/
    StopScansPage(config?: AxiosRequestConfig): Promise<operations.StopScansPageResponse>;
    /**
     * Return index page
    **/
    GetDefaultPage(config?: AxiosRequestConfig): Promise<operations.GetDefaultPageResponse>;
    /**
     * Return information on engine.
    **/
    GetInfoPage(config?: AxiosRequestConfig): Promise<operations.GetInfoPageResponse>;
    /**
     * Return liveness page
    **/
    GetLivenessPage(config?: AxiosRequestConfig): Promise<operations.GetLivenessPageResponse>;
    /**
     * Return liveness page
    **/
    GetReadinessPage(config?: AxiosRequestConfig): Promise<operations.GetReadinessPageResponse>;
    /**
     * Return test page
    **/
    GetTestPage(config?: AxiosRequestConfig): Promise<operations.GetTestPageResponse>;
    /**
     * Reload the configuration file.
    **/
    ReloadConfigurationPage(config?: AxiosRequestConfig): Promise<operations.ReloadConfigurationPageResponse>;
}
export {};
