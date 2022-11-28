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
     * createArchive - Create an archive
     *
     * Create new archive of the given kind
    **/
    createArchive(req: operations.CreateArchiveRequest, config?: AxiosRequestConfig): Promise<operations.CreateArchiveResponse>;
    /**
     * getHealthcheckResult - Get healthcheck
     *
     * Run and get the result of all checks
    **/
    getHealthcheckResult(config?: AxiosRequestConfig): Promise<operations.GetHealthcheckResultResponse>;
    /**
     * getStatus - Get server status
     *
     * Get information about current server status
    **/
    getStatus(config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
    /**
     * getSystemInfo - Get server information
     *
     * Get information about the server version
    **/
    getSystemInfo(config?: AxiosRequestConfig): Promise<operations.GetSystemInfoResponse>;
    /**
     * getZipArchive - Get an archive as a ZIP
     *
     * Get an archive of the given kind as a zip
    **/
    getZipArchive(req: operations.GetZipArchiveRequest, config?: AxiosRequestConfig): Promise<operations.GetZipArchiveResponse>;
    /**
     * listArchives - List archives
     *
     * List configuration archives
    **/
    listArchives(req: operations.ListArchivesRequest, config?: AxiosRequestConfig): Promise<operations.ListArchivesResponse>;
    /**
     * purgeSoftware - Trigger batch for cleaning unreferenced software
     *
     * Start the software cleaning batch asynchronously.
    **/
    purgeSoftware(config?: AxiosRequestConfig): Promise<operations.PurgeSoftwareResponse>;
    /**
     * regeneratePolicies - Trigger a new policy generation
     *
     * Trigger a full policy generation
    **/
    regeneratePolicies(config?: AxiosRequestConfig): Promise<operations.RegeneratePoliciesResponse>;
    /**
     * reloadAll - Reload both techniques and dynamic groups
     *
     * Reload both techniques and dynamic groups
    **/
    reloadAll(config?: AxiosRequestConfig): Promise<operations.ReloadAllResponse>;
    /**
     * reloadGroups - Reload dynamic groups
     *
     * Reload dynamic groups
    **/
    reloadGroups(config?: AxiosRequestConfig): Promise<operations.ReloadGroupsResponse>;
    /**
     * reloadTechniques - Reload techniques
     *
     * Reload techniques from local technique library
    **/
    reloadTechniques(config?: AxiosRequestConfig): Promise<operations.ReloadTechniquesResponse>;
    /**
     * restoreArchive - Restore an archive
     *
     * Restore an archive of the given kind for the given moment
    **/
    restoreArchive(req: operations.RestoreArchiveRequest, config?: AxiosRequestConfig): Promise<operations.RestoreArchiveResponse>;
    /**
     * updatePolicies - Trigger update of policies
     *
     * Update configuration policies if needed
    **/
    updatePolicies(config?: AxiosRequestConfig): Promise<operations.UpdatePoliciesResponse>;
}
