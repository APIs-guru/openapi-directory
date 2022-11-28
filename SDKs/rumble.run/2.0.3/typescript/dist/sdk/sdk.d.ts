import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://console.rumble.run/api/v1.0"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createAccountCredential - Create a new credential
    **/
    createAccountCredential(req: operations.CreateAccountCredentialRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountCredentialResponse>;
    /**
     * createAccountKey - Create a new key
    **/
    createAccountKey(req: operations.CreateAccountKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountKeyResponse>;
    /**
     * createAccountOrganization - Create a new organization
    **/
    createAccountOrganization(req: operations.CreateAccountOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountOrganizationResponse>;
    /**
     * createAccountUser - Create a new user account
    **/
    createAccountUser(req: operations.CreateAccountUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountUserResponse>;
    /**
     * createAccountUserInvite - Create a new user account and send an email invite
    **/
    createAccountUserInvite(req: operations.CreateAccountUserInviteRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountUserInviteResponse>;
    /**
     * createScan - Create a scan task for a given site
    **/
    createScan(req: operations.CreateScanRequest, config?: AxiosRequestConfig): Promise<operations.CreateScanResponse>;
    /**
     * createSite - Create a new site
    **/
    createSite(req: operations.CreateSiteRequest, config?: AxiosRequestConfig): Promise<operations.CreateSiteResponse>;
    /**
     * deleteAccountOrganizationExportToken - Removes the export token from the specified organization
    **/
    deleteAccountOrganizationExportToken(req: operations.DeleteAccountOrganizationExportTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountOrganizationExportTokenResponse>;
    /**
     * exportAssetsCsv - Asset inventory as CSV
    **/
    exportAssetsCsv(req: operations.ExportAssetsCsvRequest, config?: AxiosRequestConfig): Promise<operations.ExportAssetsCsvResponse>;
    /**
     * exportAssetsCiscoCsv - Cisco serial number and model name export for Cisco Smart Net Total Care Service.
    **/
    exportAssetsCiscoCsv(req: operations.ExportAssetsCiscoCsvRequest, config?: AxiosRequestConfig): Promise<operations.ExportAssetsCiscoCsvResponse>;
    /**
     * exportAssetsJson - Exports the asset inventory
    **/
    exportAssetsJson(req: operations.ExportAssetsJsonRequest, config?: AxiosRequestConfig): Promise<operations.ExportAssetsJsonResponse>;
    /**
     * exportAssetsJsonl - Asset inventory as JSON line-delimited
    **/
    exportAssetsJsonl(req: operations.ExportAssetsJsonlRequest, config?: AxiosRequestConfig): Promise<operations.ExportAssetsJsonlResponse>;
    /**
     * exportAssetsNmapXml - Asset inventory as Nmap-style XML
    **/
    exportAssetsNmapXml(req: operations.ExportAssetsNmapXmlRequest, config?: AxiosRequestConfig): Promise<operations.ExportAssetsNmapXmlResponse>;
    /**
     * exportEventsJson - System event log as JSON
    **/
    exportEventsJson(req: operations.ExportEventsJsonRequest, config?: AxiosRequestConfig): Promise<operations.ExportEventsJsonResponse>;
    /**
     * exportEventsJsonl - System event log as JSON line-delimited
    **/
    exportEventsJsonl(req: operations.ExportEventsJsonlRequest, config?: AxiosRequestConfig): Promise<operations.ExportEventsJsonlResponse>;
    /**
     * exportServicesCsv - Service inventory as CSV
    **/
    exportServicesCsv(req: operations.ExportServicesCsvRequest, config?: AxiosRequestConfig): Promise<operations.ExportServicesCsvResponse>;
    /**
     * exportServicesJson - Service inventory as JSON
    **/
    exportServicesJson(req: operations.ExportServicesJsonRequest, config?: AxiosRequestConfig): Promise<operations.ExportServicesJsonResponse>;
    /**
     * exportServicesJsonl - Service inventory as JSON line-delimited
    **/
    exportServicesJsonl(req: operations.ExportServicesJsonlRequest, config?: AxiosRequestConfig): Promise<operations.ExportServicesJsonlResponse>;
    /**
     * exportSitesCsv - Site list as CSV
    **/
    exportSitesCsv(req: operations.ExportSitesCsvRequest, config?: AxiosRequestConfig): Promise<operations.ExportSitesCsvResponse>;
    /**
     * exportSitesJson - Export all sites
    **/
    exportSitesJson(req: operations.ExportSitesJsonRequest, config?: AxiosRequestConfig): Promise<operations.ExportSitesJsonResponse>;
    /**
     * exportSitesJsonl - Site list as JSON line-delimited
    **/
    exportSitesJsonl(req: operations.ExportSitesJsonlRequest, config?: AxiosRequestConfig): Promise<operations.ExportSitesJsonlResponse>;
    /**
     * exportWirelessCsv - Wireless inventory as CSV
    **/
    exportWirelessCsv(req: operations.ExportWirelessCsvRequest, config?: AxiosRequestConfig): Promise<operations.ExportWirelessCsvResponse>;
    /**
     * exportWirelessJson - Wireless inventory as JSON
    **/
    exportWirelessJson(req: operations.ExportWirelessJsonRequest, config?: AxiosRequestConfig): Promise<operations.ExportWirelessJsonResponse>;
    /**
     * exportWirelessJsonl - Wireless inventory as JSON line-delimited
    **/
    exportWirelessJsonl(req: operations.ExportWirelessJsonlRequest, config?: AxiosRequestConfig): Promise<operations.ExportWirelessJsonlResponse>;
    /**
     * getAccountAgents - Get all agents across all organizations
    **/
    getAccountAgents(req: operations.GetAccountAgentsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountAgentsResponse>;
    /**
     * getAccountCredential - Get credential details
    **/
    getAccountCredential(req: operations.GetAccountCredentialRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountCredentialResponse>;
    /**
     * getAccountCredentials - Get all account credentials
    **/
    getAccountCredentials(req: operations.GetAccountCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountCredentialsResponse>;
    /**
     * getAccountKey - Get key details
    **/
    getAccountKey(req: operations.GetAccountKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountKeyResponse>;
    /**
     * getAccountKeys - Get all active API keys
    **/
    getAccountKeys(req: operations.GetAccountKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountKeysResponse>;
    /**
     * getAccountLicense - Get license details
    **/
    getAccountLicense(req: operations.GetAccountLicenseRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountLicenseResponse>;
    /**
     * getAccountOrganization - Get organization details
    **/
    getAccountOrganization(req: operations.GetAccountOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountOrganizationResponse>;
    /**
     * getAccountOrganizations - Get all organization details
    **/
    getAccountOrganizations(req: operations.GetAccountOrganizationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountOrganizationsResponse>;
    /**
     * getAccountSites - Get all sites details across all organizations
    **/
    getAccountSites(req: operations.GetAccountSitesRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountSitesResponse>;
    /**
     * getAccountTasks - Get all task details across all organizations (up to 1000)
    **/
    getAccountTasks(req: operations.GetAccountTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountTasksResponse>;
    /**
     * getAccountUser - Get user details
    **/
    getAccountUser(req: operations.GetAccountUserRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountUserResponse>;
    /**
     * getAccountUsers - Get all users
    **/
    getAccountUsers(req: operations.GetAccountUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountUsersResponse>;
    /**
     * getAgent - Get details for a single agent
    **/
    getAgent(req: operations.GetAgentRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentResponse>;
    /**
     * getAgents - Get all agents
    **/
    getAgents(req: operations.GetAgentsRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentsResponse>;
    /**
     * getAsset - Get asset details
    **/
    getAsset(req: operations.GetAssetRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetResponse>;
    /**
     * getAssets - Get all assets
    **/
    getAssets(req: operations.GetAssetsRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetsResponse>;
    /**
     * getKey - Get API key details
    **/
    getKey(req: operations.GetKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetKeyResponse>;
    /**
     * getLatestAgentVersion - Returns latest agent version
    **/
    getLatestAgentVersion(config?: AxiosRequestConfig): Promise<operations.GetLatestAgentVersionResponse>;
    /**
     * getLatestPlatformVersion - Returns latest platform version
    **/
    getLatestPlatformVersion(config?: AxiosRequestConfig): Promise<operations.GetLatestPlatformVersionResponse>;
    /**
     * getLatestScannerVersion - Returns latest scanner version
    **/
    getLatestScannerVersion(config?: AxiosRequestConfig): Promise<operations.GetLatestScannerVersionResponse>;
    /**
     * getOrganization - Get organization details
    **/
    getOrganization(req: operations.GetOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationResponse>;
    /**
     * getService - Get service details
    **/
    getService(req: operations.GetServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceResponse>;
    /**
     * getServices - Get all services
    **/
    getServices(req: operations.GetServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetServicesResponse>;
    /**
     * getSite - Get site details
    **/
    getSite(req: operations.GetSiteRequest, config?: AxiosRequestConfig): Promise<operations.GetSiteResponse>;
    /**
     * getSites - Get all sites
    **/
    getSites(req: operations.GetSitesRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesResponse>;
    /**
     * getTask - Get task details
    **/
    getTask(req: operations.GetTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskResponse>;
    /**
     * getTaskChangeReport - Returns a temporary task change report data url
    **/
    getTaskChangeReport(req: operations.GetTaskChangeReportRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskChangeReportResponse>;
    /**
     * getTaskScanData - Returns a temporary task scan data url
    **/
    getTaskScanData(req: operations.GetTaskScanDataRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskScanDataResponse>;
    /**
     * getTasks - Get all tasks (last 1000)
    **/
    getTasks(req: operations.GetTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetTasksResponse>;
    /**
     * getWirelessLan - Get wireless LAN details
    **/
    getWirelessLan(req: operations.GetWirelessLanRequest, config?: AxiosRequestConfig): Promise<operations.GetWirelessLanResponse>;
    /**
     * getWirelessLaNs - Get all wireless LANs
    **/
    getWirelessLaNs(req: operations.GetWirelessLaNsRequest, config?: AxiosRequestConfig): Promise<operations.GetWirelessLaNsResponse>;
    /**
     * hideTask - Signal that a completed task should be hidden
    **/
    hideTask(req: operations.HideTaskRequest, config?: AxiosRequestConfig): Promise<operations.HideTaskResponse>;
    /**
     * importScanData - Import a scan data file into a site
    **/
    importScanData(req: operations.ImportScanDataRequest, config?: AxiosRequestConfig): Promise<operations.ImportScanDataResponse>;
    /**
     * removeAccountCredential - Remove this credential
    **/
    removeAccountCredential(req: operations.RemoveAccountCredentialRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAccountCredentialResponse>;
    /**
     * removeAccountKey - Remove this key
    **/
    removeAccountKey(req: operations.RemoveAccountKeyRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAccountKeyResponse>;
    /**
     * removeAccountOrganization - Remove this organization
    **/
    removeAccountOrganization(req: operations.RemoveAccountOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAccountOrganizationResponse>;
    /**
     * removeAccountUser - Remove this user
    **/
    removeAccountUser(req: operations.RemoveAccountUserRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAccountUserResponse>;
    /**
     * removeAgent - Remove and uninstall an agent
    **/
    removeAgent(req: operations.RemoveAgentRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAgentResponse>;
    /**
     * removeAsset - Remove an asset
    **/
    removeAsset(req: operations.RemoveAssetRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAssetResponse>;
    /**
     * removeKey - Remove the current API key
    **/
    removeKey(req: operations.RemoveKeyRequest, config?: AxiosRequestConfig): Promise<operations.RemoveKeyResponse>;
    /**
     * removeService - Remove a service
    **/
    removeService(req: operations.RemoveServiceRequest, config?: AxiosRequestConfig): Promise<operations.RemoveServiceResponse>;
    /**
     * removeSite - Remove a site and associated assets
    **/
    removeSite(req: operations.RemoveSiteRequest, config?: AxiosRequestConfig): Promise<operations.RemoveSiteResponse>;
    /**
     * removeWirelessLan - Remove a wireless LAN
    **/
    removeWirelessLan(req: operations.RemoveWirelessLanRequest, config?: AxiosRequestConfig): Promise<operations.RemoveWirelessLanResponse>;
    /**
     * resetAccountUserLockout - Resets the user's lockout status
    **/
    resetAccountUserLockout(req: operations.ResetAccountUserLockoutRequest, config?: AxiosRequestConfig): Promise<operations.ResetAccountUserLockoutResponse>;
    /**
     * resetAccountUserMfa - Resets the user's MFA tokens
    **/
    resetAccountUserMfa(req: operations.ResetAccountUserMfaRequest, config?: AxiosRequestConfig): Promise<operations.ResetAccountUserMfaResponse>;
    /**
     * resetAccountUserPassword - Sends the user a password reset email
    **/
    resetAccountUserPassword(req: operations.ResetAccountUserPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetAccountUserPasswordResponse>;
    /**
     * rotateAccountKey - Rotates the key secret
    **/
    rotateAccountKey(req: operations.RotateAccountKeyRequest, config?: AxiosRequestConfig): Promise<operations.RotateAccountKeyResponse>;
    /**
     * rotateAccountOrganizationExportToken - Rotates the organization export token and returns the updated organization
    **/
    rotateAccountOrganizationExportToken(req: operations.RotateAccountOrganizationExportTokenRequest, config?: AxiosRequestConfig): Promise<operations.RotateAccountOrganizationExportTokenResponse>;
    /**
     * rotateKey - Rotate the API key secret and return the updated key
    **/
    rotateKey(req: operations.RotateKeyRequest, config?: AxiosRequestConfig): Promise<operations.RotateKeyResponse>;
    /**
     * snowExportAssetsCsv - Export an asset inventory as CSV for ServiceNow integration
    **/
    snowExportAssetsCsv(req: operations.SnowExportAssetsCsvRequest, config?: AxiosRequestConfig): Promise<operations.SnowExportAssetsCsvResponse>;
    /**
     * snowExportAssetsJson - Exports the asset inventory as JSON
    **/
    snowExportAssetsJson(req: operations.SnowExportAssetsJsonRequest, config?: AxiosRequestConfig): Promise<operations.SnowExportAssetsJsonResponse>;
    /**
     * snowExportServicesCsv - Export a service inventory as CSV for ServiceNow integration
    **/
    snowExportServicesCsv(req: operations.SnowExportServicesCsvRequest, config?: AxiosRequestConfig): Promise<operations.SnowExportServicesCsvResponse>;
    /**
     * splunkAssetSyncCreatedJson - Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
    **/
    splunkAssetSyncCreatedJson(req: operations.SplunkAssetSyncCreatedJsonRequest, config?: AxiosRequestConfig): Promise<operations.SplunkAssetSyncCreatedJsonResponse>;
    /**
     * splunkAssetSyncUpdatedJson - Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.
    **/
    splunkAssetSyncUpdatedJson(req: operations.SplunkAssetSyncUpdatedJsonRequest, config?: AxiosRequestConfig): Promise<operations.SplunkAssetSyncUpdatedJsonResponse>;
    /**
     * stopTask - Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
    **/
    stopTask(req: operations.StopTaskRequest, config?: AxiosRequestConfig): Promise<operations.StopTaskResponse>;
    /**
     * updateAccountOrganization - Update organization details
    **/
    updateAccountOrganization(req: operations.UpdateAccountOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountOrganizationResponse>;
    /**
     * updateAccountUser - Update a user's details
    **/
    updateAccountUser(req: operations.UpdateAccountUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountUserResponse>;
    /**
     * updateAgentSite - Update the site associated with agent
    **/
    updateAgentSite(req: operations.UpdateAgentSiteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAgentSiteResponse>;
    /**
     * updateAssetComments - Update asset comments
    **/
    updateAssetComments(req: operations.UpdateAssetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssetCommentsResponse>;
    /**
     * updateAssetTags - Update asset tags
    **/
    updateAssetTags(req: operations.UpdateAssetTagsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssetTagsResponse>;
    /**
     * updateOrganization - Update organization details
    **/
    updateOrganization(req: operations.UpdateOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationResponse>;
    /**
     * updateSite - Update a site definition
    **/
    updateSite(req: operations.UpdateSiteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSiteResponse>;
    /**
     * updateTask - Update task parameters
    **/
    updateTask(req: operations.UpdateTaskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaskResponse>;
    /**
     * upgradeAgent - Force an agent to update and restart
    **/
    upgradeAgent(req: operations.UpgradeAgentRequest, config?: AxiosRequestConfig): Promise<operations.UpgradeAgentResponse>;
}
export {};
