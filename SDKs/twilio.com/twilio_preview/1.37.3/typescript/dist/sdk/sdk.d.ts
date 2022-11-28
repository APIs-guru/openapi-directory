import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://preview.twilio.com"];
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
     * createDeployedDevicesCertificate - Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
    **/
    createDeployedDevicesCertificate(req: operations.CreateDeployedDevicesCertificateRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeployedDevicesCertificateResponse>;
    /**
     * createDeployedDevicesDeployment - Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
    **/
    createDeployedDevicesDeployment(req: operations.CreateDeployedDevicesDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeployedDevicesDeploymentResponse>;
    /**
     * createDeployedDevicesDevice - Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
    **/
    createDeployedDevicesDevice(req: operations.CreateDeployedDevicesDeviceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeployedDevicesDeviceResponse>;
    /**
     * createDeployedDevicesFleet - Create a new Fleet for scoping of deployed devices within your account.
    **/
    createDeployedDevicesFleet(req: operations.CreateDeployedDevicesFleetRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeployedDevicesFleetResponse>;
    /**
     * createDeployedDevicesKey - Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
    **/
    createDeployedDevicesKey(req: operations.CreateDeployedDevicesKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeployedDevicesKeyResponse>;
    /**
     * createHostedNumbersAuthorizationDocument - Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
    **/
    createHostedNumbersAuthorizationDocument(req: operations.CreateHostedNumbersAuthorizationDocumentRequest, config?: AxiosRequestConfig): Promise<operations.CreateHostedNumbersAuthorizationDocumentResponse>;
    /**
     * createHostedNumbersHostedNumberOrder - Host a phone number's capability on Twilio's platform.
    **/
    createHostedNumbersHostedNumberOrder(req: operations.CreateHostedNumbersHostedNumberOrderRequest, config?: AxiosRequestConfig): Promise<operations.CreateHostedNumbersHostedNumberOrderResponse>;
    /**
     * createMarketplaceInstalledAddOn - Install an Add-on for the Account specified.
    **/
    createMarketplaceInstalledAddOn(req: operations.CreateMarketplaceInstalledAddOnRequest, config?: AxiosRequestConfig): Promise<operations.CreateMarketplaceInstalledAddOnResponse>;
    createSyncDocument(req: operations.CreateSyncDocumentRequest, config?: AxiosRequestConfig): Promise<operations.CreateSyncDocumentResponse>;
    createSyncService(req: operations.CreateSyncServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateSyncServiceResponse>;
    createSyncSyncList(req: operations.CreateSyncSyncListRequest, config?: AxiosRequestConfig): Promise<operations.CreateSyncSyncListResponse>;
    createSyncSyncListItem(req: operations.CreateSyncSyncListItemRequest, config?: AxiosRequestConfig): Promise<operations.CreateSyncSyncListItemResponse>;
    createSyncSyncMap(req: operations.CreateSyncSyncMapRequest, config?: AxiosRequestConfig): Promise<operations.CreateSyncSyncMapResponse>;
    createSyncSyncMapItem(req: operations.CreateSyncSyncMapItemRequest, config?: AxiosRequestConfig): Promise<operations.CreateSyncSyncMapItemResponse>;
    /**
     * createTrustedCommsChannel - Associate a channel to a branded channel
    **/
    createTrustedCommsChannel(req: operations.CreateTrustedCommsChannelRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrustedCommsChannelResponse>;
    createUnderstandAssistant(req: operations.CreateUnderstandAssistantRequest, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandAssistantResponse>;
    createUnderstandField(req: operations.CreateUnderstandFieldRequest, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandFieldResponse>;
    createUnderstandFieldType(req: operations.CreateUnderstandFieldTypeRequest, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandFieldTypeResponse>;
    createUnderstandFieldValue(req: operations.CreateUnderstandFieldValueRequest, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandFieldValueResponse>;
    createUnderstandModelBuild(req: operations.CreateUnderstandModelBuildRequest, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandModelBuildResponse>;
    createUnderstandQuery(req: operations.CreateUnderstandQueryRequest, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandQueryResponse>;
    createUnderstandSample(req: operations.CreateUnderstandSampleRequest, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandSampleResponse>;
    createUnderstandTask(req: operations.CreateUnderstandTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandTaskResponse>;
    createWirelessCommand(req: operations.CreateWirelessCommandRequest, config?: AxiosRequestConfig): Promise<operations.CreateWirelessCommandResponse>;
    createWirelessRatePlan(req: operations.CreateWirelessRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateWirelessRatePlanResponse>;
    /**
     * deleteDeployedDevicesCertificate - Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
    **/
    deleteDeployedDevicesCertificate(req: operations.DeleteDeployedDevicesCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeployedDevicesCertificateResponse>;
    /**
     * deleteDeployedDevicesDeployment - Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
    **/
    deleteDeployedDevicesDeployment(req: operations.DeleteDeployedDevicesDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeployedDevicesDeploymentResponse>;
    /**
     * deleteDeployedDevicesDevice - Delete a specific Device from the Fleet, also removing it from associated Deployments.
    **/
    deleteDeployedDevicesDevice(req: operations.DeleteDeployedDevicesDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeployedDevicesDeviceResponse>;
    /**
     * deleteDeployedDevicesFleet - Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
    **/
    deleteDeployedDevicesFleet(req: operations.DeleteDeployedDevicesFleetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeployedDevicesFleetResponse>;
    /**
     * deleteDeployedDevicesKey - Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
    **/
    deleteDeployedDevicesKey(req: operations.DeleteDeployedDevicesKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeployedDevicesKeyResponse>;
    /**
     * deleteHostedNumbersHostedNumberOrder - Cancel the HostedNumberOrder (only available when the status is in `received`).
    **/
    deleteHostedNumbersHostedNumberOrder(req: operations.DeleteHostedNumbersHostedNumberOrderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHostedNumbersHostedNumberOrderResponse>;
    /**
     * deleteMarketplaceInstalledAddOn - Remove an Add-on installation from your account
    **/
    deleteMarketplaceInstalledAddOn(req: operations.DeleteMarketplaceInstalledAddOnRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMarketplaceInstalledAddOnResponse>;
    deleteSyncDocument(req: operations.DeleteSyncDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncDocumentResponse>;
    /**
     * deleteSyncDocumentPermission - Delete a specific Sync Document Permission.
    **/
    deleteSyncDocumentPermission(req: operations.DeleteSyncDocumentPermissionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncDocumentPermissionResponse>;
    deleteSyncService(req: operations.DeleteSyncServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncServiceResponse>;
    deleteSyncSyncList(req: operations.DeleteSyncSyncListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncSyncListResponse>;
    deleteSyncSyncListItem(req: operations.DeleteSyncSyncListItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncSyncListItemResponse>;
    /**
     * deleteSyncSyncListPermission - Delete a specific Sync List Permission.
    **/
    deleteSyncSyncListPermission(req: operations.DeleteSyncSyncListPermissionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncSyncListPermissionResponse>;
    deleteSyncSyncMap(req: operations.DeleteSyncSyncMapRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncSyncMapResponse>;
    deleteSyncSyncMapItem(req: operations.DeleteSyncSyncMapItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncSyncMapItemResponse>;
    /**
     * deleteSyncSyncMapPermission - Delete a specific Sync Map Permission.
    **/
    deleteSyncSyncMapPermission(req: operations.DeleteSyncSyncMapPermissionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncSyncMapPermissionResponse>;
    deleteUnderstandAssistant(req: operations.DeleteUnderstandAssistantRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandAssistantResponse>;
    deleteUnderstandField(req: operations.DeleteUnderstandFieldRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandFieldResponse>;
    deleteUnderstandFieldType(req: operations.DeleteUnderstandFieldTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandFieldTypeResponse>;
    deleteUnderstandFieldValue(req: operations.DeleteUnderstandFieldValueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandFieldValueResponse>;
    deleteUnderstandModelBuild(req: operations.DeleteUnderstandModelBuildRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandModelBuildResponse>;
    deleteUnderstandQuery(req: operations.DeleteUnderstandQueryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandQueryResponse>;
    deleteUnderstandSample(req: operations.DeleteUnderstandSampleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandSampleResponse>;
    deleteUnderstandTask(req: operations.DeleteUnderstandTaskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandTaskResponse>;
    deleteWirelessRatePlan(req: operations.DeleteWirelessRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWirelessRatePlanResponse>;
    /**
     * fetchDeployedDevicesCertificate - Fetch information about a specific Certificate credential in the Fleet.
    **/
    fetchDeployedDevicesCertificate(req: operations.FetchDeployedDevicesCertificateRequest, config?: AxiosRequestConfig): Promise<operations.FetchDeployedDevicesCertificateResponse>;
    /**
     * fetchDeployedDevicesDeployment - Fetch information about a specific Deployment in the Fleet.
    **/
    fetchDeployedDevicesDeployment(req: operations.FetchDeployedDevicesDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.FetchDeployedDevicesDeploymentResponse>;
    /**
     * fetchDeployedDevicesDevice - Fetch information about a specific Device in the Fleet.
    **/
    fetchDeployedDevicesDevice(req: operations.FetchDeployedDevicesDeviceRequest, config?: AxiosRequestConfig): Promise<operations.FetchDeployedDevicesDeviceResponse>;
    /**
     * fetchDeployedDevicesFleet - Fetch information about a specific Fleet in your account.
    **/
    fetchDeployedDevicesFleet(req: operations.FetchDeployedDevicesFleetRequest, config?: AxiosRequestConfig): Promise<operations.FetchDeployedDevicesFleetResponse>;
    /**
     * fetchDeployedDevicesKey - Fetch information about a specific Key credential in the Fleet.
    **/
    fetchDeployedDevicesKey(req: operations.FetchDeployedDevicesKeyRequest, config?: AxiosRequestConfig): Promise<operations.FetchDeployedDevicesKeyResponse>;
    /**
     * fetchHostedNumbersAuthorizationDocument - Fetch a specific AuthorizationDocument.
    **/
    fetchHostedNumbersAuthorizationDocument(req: operations.FetchHostedNumbersAuthorizationDocumentRequest, config?: AxiosRequestConfig): Promise<operations.FetchHostedNumbersAuthorizationDocumentResponse>;
    /**
     * fetchHostedNumbersHostedNumberOrder - Fetch a specific HostedNumberOrder.
    **/
    fetchHostedNumbersHostedNumberOrder(req: operations.FetchHostedNumbersHostedNumberOrderRequest, config?: AxiosRequestConfig): Promise<operations.FetchHostedNumbersHostedNumberOrderResponse>;
    /**
     * fetchMarketplaceAvailableAddOn - Fetch an instance of an Add-on currently available to be installed.
    **/
    fetchMarketplaceAvailableAddOn(req: operations.FetchMarketplaceAvailableAddOnRequest, config?: AxiosRequestConfig): Promise<operations.FetchMarketplaceAvailableAddOnResponse>;
    /**
     * fetchMarketplaceAvailableAddOnExtension - Fetch an instance of an Extension for the Available Add-on.
    **/
    fetchMarketplaceAvailableAddOnExtension(req: operations.FetchMarketplaceAvailableAddOnExtensionRequest, config?: AxiosRequestConfig): Promise<operations.FetchMarketplaceAvailableAddOnExtensionResponse>;
    /**
     * fetchMarketplaceInstalledAddOn - Fetch an instance of an Add-on currently installed on this Account.
    **/
    fetchMarketplaceInstalledAddOn(req: operations.FetchMarketplaceInstalledAddOnRequest, config?: AxiosRequestConfig): Promise<operations.FetchMarketplaceInstalledAddOnResponse>;
    /**
     * fetchMarketplaceInstalledAddOnExtension - Fetch an instance of an Extension for the Installed Add-on.
    **/
    fetchMarketplaceInstalledAddOnExtension(req: operations.FetchMarketplaceInstalledAddOnExtensionRequest, config?: AxiosRequestConfig): Promise<operations.FetchMarketplaceInstalledAddOnExtensionResponse>;
    fetchSyncDocument(req: operations.FetchSyncDocumentRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncDocumentResponse>;
    /**
     * fetchSyncDocumentPermission - Fetch a specific Sync Document Permission.
    **/
    fetchSyncDocumentPermission(req: operations.FetchSyncDocumentPermissionRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncDocumentPermissionResponse>;
    fetchSyncService(req: operations.FetchSyncServiceRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncServiceResponse>;
    fetchSyncSyncList(req: operations.FetchSyncSyncListRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncSyncListResponse>;
    fetchSyncSyncListItem(req: operations.FetchSyncSyncListItemRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncSyncListItemResponse>;
    /**
     * fetchSyncSyncListPermission - Fetch a specific Sync List Permission.
    **/
    fetchSyncSyncListPermission(req: operations.FetchSyncSyncListPermissionRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncSyncListPermissionResponse>;
    fetchSyncSyncMap(req: operations.FetchSyncSyncMapRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncSyncMapResponse>;
    fetchSyncSyncMapItem(req: operations.FetchSyncSyncMapItemRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncSyncMapItemResponse>;
    /**
     * fetchSyncSyncMapPermission - Fetch a specific Sync Map Permission.
    **/
    fetchSyncSyncMapPermission(req: operations.FetchSyncSyncMapPermissionRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncSyncMapPermissionResponse>;
    /**
     * fetchTrustedCommsBrandedChannel - Fetch a specific Branded Channel.
    **/
    fetchTrustedCommsBrandedChannel(req: operations.FetchTrustedCommsBrandedChannelRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrustedCommsBrandedChannelResponse>;
    /**
     * fetchTrustedCommsBrandsInformation - Retrieve the newest available BrandInformation
    **/
    fetchTrustedCommsBrandsInformation(req: operations.FetchTrustedCommsBrandsInformationRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrustedCommsBrandsInformationResponse>;
    /**
     * fetchTrustedCommsCps - Fetch a specific Call Placement Service (CPS) given a phone number via `X-XCNAM-Sensitive-Phone-Number` header.
    **/
    fetchTrustedCommsCps(req: operations.FetchTrustedCommsCpsRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrustedCommsCpsResponse>;
    /**
     * fetchTrustedCommsCurrentCall - Retrieve a current call given the originating and terminating number via `X-XCNAM-Sensitive-Phone-Number-From` and `X-XCNAM-Sensitive-Phone-Number-To` headers.
    **/
    fetchTrustedCommsCurrentCall(req: operations.FetchTrustedCommsCurrentCallRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrustedCommsCurrentCallResponse>;
    fetchUnderstandAssistant(req: operations.FetchUnderstandAssistantRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandAssistantResponse>;
    fetchUnderstandAssistantFallbackActions(req: operations.FetchUnderstandAssistantFallbackActionsRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandAssistantFallbackActionsResponse>;
    fetchUnderstandAssistantInitiationActions(req: operations.FetchUnderstandAssistantInitiationActionsRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandAssistantInitiationActionsResponse>;
    fetchUnderstandDialogue(req: operations.FetchUnderstandDialogueRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandDialogueResponse>;
    fetchUnderstandField(req: operations.FetchUnderstandFieldRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandFieldResponse>;
    fetchUnderstandFieldType(req: operations.FetchUnderstandFieldTypeRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandFieldTypeResponse>;
    fetchUnderstandFieldValue(req: operations.FetchUnderstandFieldValueRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandFieldValueResponse>;
    fetchUnderstandModelBuild(req: operations.FetchUnderstandModelBuildRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandModelBuildResponse>;
    fetchUnderstandQuery(req: operations.FetchUnderstandQueryRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandQueryResponse>;
    fetchUnderstandSample(req: operations.FetchUnderstandSampleRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandSampleResponse>;
    /**
     * fetchUnderstandStyleSheet - Returns Style sheet JSON object for this Assistant
    **/
    fetchUnderstandStyleSheet(req: operations.FetchUnderstandStyleSheetRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandStyleSheetResponse>;
    fetchUnderstandTask(req: operations.FetchUnderstandTaskRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandTaskResponse>;
    /**
     * fetchUnderstandTaskActions - Returns JSON actions for this Task.
    **/
    fetchUnderstandTaskActions(req: operations.FetchUnderstandTaskActionsRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandTaskActionsResponse>;
    fetchUnderstandTaskStatistics(req: operations.FetchUnderstandTaskStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandTaskStatisticsResponse>;
    fetchWirelessCommand(req: operations.FetchWirelessCommandRequest, config?: AxiosRequestConfig): Promise<operations.FetchWirelessCommandResponse>;
    fetchWirelessRatePlan(req: operations.FetchWirelessRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.FetchWirelessRatePlanResponse>;
    fetchWirelessSim(req: operations.FetchWirelessSimRequest, config?: AxiosRequestConfig): Promise<operations.FetchWirelessSimResponse>;
    fetchWirelessUsage(req: operations.FetchWirelessUsageRequest, config?: AxiosRequestConfig): Promise<operations.FetchWirelessUsageResponse>;
    /**
     * listDeployedDevicesCertificate - Retrieve a list of all Certificate credentials belonging to the Fleet.
    **/
    listDeployedDevicesCertificate(req: operations.ListDeployedDevicesCertificateRequest, config?: AxiosRequestConfig): Promise<operations.ListDeployedDevicesCertificateResponse>;
    /**
     * listDeployedDevicesDeployment - Retrieve a list of all Deployments belonging to the Fleet.
    **/
    listDeployedDevicesDeployment(req: operations.ListDeployedDevicesDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.ListDeployedDevicesDeploymentResponse>;
    /**
     * listDeployedDevicesDevice - Retrieve a list of all Devices belonging to the Fleet.
    **/
    listDeployedDevicesDevice(req: operations.ListDeployedDevicesDeviceRequest, config?: AxiosRequestConfig): Promise<operations.ListDeployedDevicesDeviceResponse>;
    /**
     * listDeployedDevicesFleet - Retrieve a list of all Fleets belonging to your account.
    **/
    listDeployedDevicesFleet(req: operations.ListDeployedDevicesFleetRequest, config?: AxiosRequestConfig): Promise<operations.ListDeployedDevicesFleetResponse>;
    /**
     * listDeployedDevicesKey - Retrieve a list of all Keys credentials belonging to the Fleet.
    **/
    listDeployedDevicesKey(req: operations.ListDeployedDevicesKeyRequest, config?: AxiosRequestConfig): Promise<operations.ListDeployedDevicesKeyResponse>;
    /**
     * listHostedNumbersAuthorizationDocument - Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
    **/
    listHostedNumbersAuthorizationDocument(req: operations.ListHostedNumbersAuthorizationDocumentRequest, config?: AxiosRequestConfig): Promise<operations.ListHostedNumbersAuthorizationDocumentResponse>;
    /**
     * listHostedNumbersDependentHostedNumberOrder - Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
    **/
    listHostedNumbersDependentHostedNumberOrder(req: operations.ListHostedNumbersDependentHostedNumberOrderRequest, config?: AxiosRequestConfig): Promise<operations.ListHostedNumbersDependentHostedNumberOrderResponse>;
    /**
     * listHostedNumbersHostedNumberOrder - Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
    **/
    listHostedNumbersHostedNumberOrder(req: operations.ListHostedNumbersHostedNumberOrderRequest, config?: AxiosRequestConfig): Promise<operations.ListHostedNumbersHostedNumberOrderResponse>;
    /**
     * listMarketplaceAvailableAddOn - Retrieve a list of Add-ons currently available to be installed.
    **/
    listMarketplaceAvailableAddOn(req: operations.ListMarketplaceAvailableAddOnRequest, config?: AxiosRequestConfig): Promise<operations.ListMarketplaceAvailableAddOnResponse>;
    /**
     * listMarketplaceAvailableAddOnExtension - Retrieve a list of Extensions for the Available Add-on.
    **/
    listMarketplaceAvailableAddOnExtension(req: operations.ListMarketplaceAvailableAddOnExtensionRequest, config?: AxiosRequestConfig): Promise<operations.ListMarketplaceAvailableAddOnExtensionResponse>;
    /**
     * listMarketplaceInstalledAddOn - Retrieve a list of Add-ons currently installed on this Account.
    **/
    listMarketplaceInstalledAddOn(req: operations.ListMarketplaceInstalledAddOnRequest, config?: AxiosRequestConfig): Promise<operations.ListMarketplaceInstalledAddOnResponse>;
    /**
     * listMarketplaceInstalledAddOnExtension - Retrieve a list of Extensions for the Installed Add-on.
    **/
    listMarketplaceInstalledAddOnExtension(req: operations.ListMarketplaceInstalledAddOnExtensionRequest, config?: AxiosRequestConfig): Promise<operations.ListMarketplaceInstalledAddOnExtensionResponse>;
    listSyncDocument(req: operations.ListSyncDocumentRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncDocumentResponse>;
    /**
     * listSyncDocumentPermission - Retrieve a list of all Permissions applying to a Sync Document.
    **/
    listSyncDocumentPermission(req: operations.ListSyncDocumentPermissionRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncDocumentPermissionResponse>;
    listSyncService(req: operations.ListSyncServiceRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncServiceResponse>;
    listSyncSyncList(req: operations.ListSyncSyncListRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncSyncListResponse>;
    listSyncSyncListItem(req: operations.ListSyncSyncListItemRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncSyncListItemResponse>;
    /**
     * listSyncSyncListPermission - Retrieve a list of all Permissions applying to a Sync List.
    **/
    listSyncSyncListPermission(req: operations.ListSyncSyncListPermissionRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncSyncListPermissionResponse>;
    listSyncSyncMap(req: operations.ListSyncSyncMapRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncSyncMapResponse>;
    listSyncSyncMapItem(req: operations.ListSyncSyncMapItemRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncSyncMapItemResponse>;
    /**
     * listSyncSyncMapPermission - Retrieve a list of all Permissions applying to a Sync Map.
    **/
    listSyncSyncMapPermission(req: operations.ListSyncSyncMapPermissionRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncSyncMapPermissionResponse>;
    listUnderstandAssistant(req: operations.ListUnderstandAssistantRequest, config?: AxiosRequestConfig): Promise<operations.ListUnderstandAssistantResponse>;
    listUnderstandField(req: operations.ListUnderstandFieldRequest, config?: AxiosRequestConfig): Promise<operations.ListUnderstandFieldResponse>;
    listUnderstandFieldType(req: operations.ListUnderstandFieldTypeRequest, config?: AxiosRequestConfig): Promise<operations.ListUnderstandFieldTypeResponse>;
    listUnderstandFieldValue(req: operations.ListUnderstandFieldValueRequest, config?: AxiosRequestConfig): Promise<operations.ListUnderstandFieldValueResponse>;
    listUnderstandModelBuild(req: operations.ListUnderstandModelBuildRequest, config?: AxiosRequestConfig): Promise<operations.ListUnderstandModelBuildResponse>;
    listUnderstandQuery(req: operations.ListUnderstandQueryRequest, config?: AxiosRequestConfig): Promise<operations.ListUnderstandQueryResponse>;
    listUnderstandSample(req: operations.ListUnderstandSampleRequest, config?: AxiosRequestConfig): Promise<operations.ListUnderstandSampleResponse>;
    listUnderstandTask(req: operations.ListUnderstandTaskRequest, config?: AxiosRequestConfig): Promise<operations.ListUnderstandTaskResponse>;
    listWirelessCommand(req: operations.ListWirelessCommandRequest, config?: AxiosRequestConfig): Promise<operations.ListWirelessCommandResponse>;
    listWirelessRatePlan(req: operations.ListWirelessRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.ListWirelessRatePlanResponse>;
    listWirelessSim(req: operations.ListWirelessSimRequest, config?: AxiosRequestConfig): Promise<operations.ListWirelessSimResponse>;
    /**
     * updateDeployedDevicesCertificate - Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
    **/
    updateDeployedDevicesCertificate(req: operations.UpdateDeployedDevicesCertificateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeployedDevicesCertificateResponse>;
    /**
     * updateDeployedDevicesDeployment - Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
    **/
    updateDeployedDevicesDeployment(req: operations.UpdateDeployedDevicesDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeployedDevicesDeploymentResponse>;
    /**
     * updateDeployedDevicesDevice - Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
    **/
    updateDeployedDevicesDevice(req: operations.UpdateDeployedDevicesDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeployedDevicesDeviceResponse>;
    /**
     * updateDeployedDevicesFleet - Update the friendly name property of a specific Fleet in your account.
    **/
    updateDeployedDevicesFleet(req: operations.UpdateDeployedDevicesFleetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeployedDevicesFleetResponse>;
    /**
     * updateDeployedDevicesKey - Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
    **/
    updateDeployedDevicesKey(req: operations.UpdateDeployedDevicesKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeployedDevicesKeyResponse>;
    /**
     * updateHostedNumbersAuthorizationDocument - Updates a specific AuthorizationDocument.
    **/
    updateHostedNumbersAuthorizationDocument(req: operations.UpdateHostedNumbersAuthorizationDocumentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateHostedNumbersAuthorizationDocumentResponse>;
    /**
     * updateHostedNumbersHostedNumberOrder - Updates a specific HostedNumberOrder.
    **/
    updateHostedNumbersHostedNumberOrder(req: operations.UpdateHostedNumbersHostedNumberOrderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateHostedNumbersHostedNumberOrderResponse>;
    /**
     * updateMarketplaceInstalledAddOn - Update an Add-on installation for the Account specified.
    **/
    updateMarketplaceInstalledAddOn(req: operations.UpdateMarketplaceInstalledAddOnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMarketplaceInstalledAddOnResponse>;
    /**
     * updateMarketplaceInstalledAddOnExtension - Update an Extension for an Add-on installation.
    **/
    updateMarketplaceInstalledAddOnExtension(req: operations.UpdateMarketplaceInstalledAddOnExtensionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMarketplaceInstalledAddOnExtensionResponse>;
    updateSyncDocument(req: operations.UpdateSyncDocumentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncDocumentResponse>;
    /**
     * updateSyncDocumentPermission - Update an identity's access to a specific Sync Document.
    **/
    updateSyncDocumentPermission(req: operations.UpdateSyncDocumentPermissionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncDocumentPermissionResponse>;
    updateSyncService(req: operations.UpdateSyncServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncServiceResponse>;
    updateSyncSyncListItem(req: operations.UpdateSyncSyncListItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncSyncListItemResponse>;
    /**
     * updateSyncSyncListPermission - Update an identity's access to a specific Sync List.
    **/
    updateSyncSyncListPermission(req: operations.UpdateSyncSyncListPermissionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncSyncListPermissionResponse>;
    updateSyncSyncMapItem(req: operations.UpdateSyncSyncMapItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncSyncMapItemResponse>;
    /**
     * updateSyncSyncMapPermission - Update an identity's access to a specific Sync Map.
    **/
    updateSyncSyncMapPermission(req: operations.UpdateSyncSyncMapPermissionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncSyncMapPermissionResponse>;
    updateUnderstandAssistant(req: operations.UpdateUnderstandAssistantRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandAssistantResponse>;
    updateUnderstandAssistantFallbackActions(req: operations.UpdateUnderstandAssistantFallbackActionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandAssistantFallbackActionsResponse>;
    updateUnderstandAssistantInitiationActions(req: operations.UpdateUnderstandAssistantInitiationActionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandAssistantInitiationActionsResponse>;
    updateUnderstandFieldType(req: operations.UpdateUnderstandFieldTypeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandFieldTypeResponse>;
    updateUnderstandModelBuild(req: operations.UpdateUnderstandModelBuildRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandModelBuildResponse>;
    updateUnderstandQuery(req: operations.UpdateUnderstandQueryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandQueryResponse>;
    updateUnderstandSample(req: operations.UpdateUnderstandSampleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandSampleResponse>;
    /**
     * updateUnderstandStyleSheet - Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
    **/
    updateUnderstandStyleSheet(req: operations.UpdateUnderstandStyleSheetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandStyleSheetResponse>;
    updateUnderstandTask(req: operations.UpdateUnderstandTaskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandTaskResponse>;
    /**
     * updateUnderstandTaskActions - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
    **/
    updateUnderstandTaskActions(req: operations.UpdateUnderstandTaskActionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandTaskActionsResponse>;
    updateWirelessRatePlan(req: operations.UpdateWirelessRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWirelessRatePlanResponse>;
    updateWirelessSim(req: operations.UpdateWirelessSimRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWirelessSimResponse>;
}
export {};
