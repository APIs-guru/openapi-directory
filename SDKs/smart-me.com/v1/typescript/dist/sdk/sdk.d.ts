import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://smart-me.com:443"];
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
     * accessTokenPut - Creates a Access Token to write on a Card (e.g. NFC)
     *
     * Creates a Access Token to write on a Card (e.g. NFC)
    **/
    accessTokenPut(req: operations.AccessTokenPutRequest, config?: AxiosRequestConfig): Promise<operations.AccessTokenPutResponse>;
    accountLogin(config?: AxiosRequestConfig): Promise<operations.AccountLoginResponse>;
    /**
     * actionsGet - Gets all available Actions of a Device
     *
     * Gets all available Actions of a Device
    **/
    actionsGet(req: operations.ActionsGetRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetResponse>;
    /**
     * additionalDeviceInformationGet - Gets the additional information (e.g. Firmware Version) about a device.
     *
     * Gets the additional information (e.g. Firmware Version) about a device.
    **/
    additionalDeviceInformationGet(req: operations.AdditionalDeviceInformationGetRequest, config?: AxiosRequestConfig): Promise<operations.AdditionalDeviceInformationGetResponse>;
    /**
     * customDeviceGet - Gets all Custom Devices
     *
     * Gets all Devices
    **/
    customDeviceGet(config?: AxiosRequestConfig): Promise<operations.CustomDeviceGetResponse>;
    /**
     * deviceBySerialGet - Gets a Device by it's Serial Number. The Serial is the part before the "-".
     *
     * Gets a Device by it's Serial Number. The Serial is the part before the "-".
    **/
    deviceBySerialGet(req: operations.DeviceBySerialGetRequest, config?: AxiosRequestConfig): Promise<operations.DeviceBySerialGetResponse>;
    /**
     * devicesByEnergyGet - Gets all Devices for an Energy Type
     *
     * Gets all Devices for an Energy Type
    **/
    devicesByEnergyGet(req: operations.DevicesByEnergyGetRequest, config?: AxiosRequestConfig): Promise<operations.DevicesByEnergyGetResponse>;
    /**
     * devicesBySubTypeGet - Gets all Devices by it's Sub Type (e.g. E-Charging Station)
     *
     * Gets all Devices by it's Sub Type (e.g. E-Charging Station)
    **/
    devicesBySubTypeGet(req: operations.DevicesBySubTypeGetRequest, config?: AxiosRequestConfig): Promise<operations.DevicesBySubTypeGetResponse>;
    /**
     * devicesGet - Gets all Devices
     *
     * Gets all Devices
    **/
    devicesGet(config?: AxiosRequestConfig): Promise<operations.DevicesGetResponse>;
    /**
     * devicesPost - Creates or updates a Device or updates it's values.
     *
     * Creates or updates a Device or updates it's values.
     *             For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
     *             To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)
    **/
    devicesPost(req: operations.DevicesPostRequest, config?: AxiosRequestConfig): Promise<operations.DevicesPostResponse>;
    /**
     * devicesPut - Updates the On/Off Switch on a device.
     *             For new implementations please use the "actions" command
     *
     * Updates the On/Off Switch on a device
     *             For new implementations please use the "actions" command
    **/
    devicesPut(req: operations.DevicesPutRequest, config?: AxiosRequestConfig): Promise<operations.DevicesPutResponse>;
    /**
     * fastSendDeviceValuesGet - Force a device to send the data every second (if supported). This for about 30s.
     *             Don't use this call to force a device to send the data every second for a longer time.
    **/
    fastSendDeviceValuesGet(req: operations.FastSendDeviceValuesGetRequest, config?: AxiosRequestConfig): Promise<operations.FastSendDeviceValuesGetResponse>;
    /**
     * folderAssignPost - Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.
    **/
    folderAssignPost(req: operations.FolderAssignPostRequest, config?: AxiosRequestConfig): Promise<operations.FolderAssignPostResponse>;
    /**
     * folderMenuGet - Gets the folder menu items (each item might contain child items)
    **/
    folderMenuGet(req: operations.FolderMenuGetRequest, config?: AxiosRequestConfig): Promise<operations.FolderMenuGetResponse>;
    /**
     * folderSettingsDelete - Deletes a folder
    **/
    folderSettingsDelete(req: operations.FolderSettingsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FolderSettingsDeleteResponse>;
    /**
     * folderSettingsGet - Gets the settings of a folder or meter
    **/
    folderSettingsGet(req: operations.FolderSettingsGetRequest, config?: AxiosRequestConfig): Promise<operations.FolderSettingsGetResponse>;
    /**
     * folderSettingsPost - Add or edit a folder or a meter. To add a new folder use and empty ID
    **/
    folderSettingsPost(req: operations.FolderSettingsPostRequest, config?: AxiosRequestConfig): Promise<operations.FolderSettingsPostResponse>;
    /**
     * folderGet - Gets the Values for a folder or a meter
     *
     * Gets the Values for a folder or a meter
    **/
    folderGet(req: operations.FolderGetRequest, config?: AxiosRequestConfig): Promise<operations.FolderGetResponse>;
    /**
     * getApiCustomDeviceId - Gets a Custom Device by it's ID
     *
     * Gets a Device by it's ID
    **/
    getApiCustomDeviceId(req: operations.GetApiCustomDeviceIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiCustomDeviceIdResponse>;
    /**
     * getApiDevicesId - Gets a Device by it's ID
     *
     * Gets a Device by it's ID
    **/
    getApiDevicesId(req: operations.GetApiDevicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiDevicesIdResponse>;
    /**
     * getApiVirtualTariffId - Gets all virtual tariffs of a folder
     *
     * Gets all virtual tariffs of a folder
    **/
    getApiVirtualTariffId(req: operations.GetApiVirtualTariffIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVirtualTariffIdResponse>;
    /**
     * getApiPicoLoadmanagementgroup - GET: api/pico/loadmanagementgroup
     *
     *             Returns all available load management groups
    **/
    getApiPicoLoadmanagementgroup(config?: AxiosRequestConfig): Promise<operations.GetApiPicoLoadmanagementgroupResponse>;
    /**
     * healthGet - A method returning HTTP 200 OK when queried.
     *             It is used by Kubernetes probes to determine whether the app is healthy.
    **/
    healthGet(config?: AxiosRequestConfig): Promise<operations.HealthGetResponse>;
    /**
     * mBusPost - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
     *             Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
     *
     * M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
     *             Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
    **/
    mBusPost(req: operations.MBusPostRequest, config?: AxiosRequestConfig): Promise<operations.MBusPostResponse>;
    /**
     * meterFolderInformationGet - Beta: Gets the General Information for a Meter or a Folder
     *
     * Beta: Gets the General Information for a Meter or a Folder
    **/
    meterFolderInformationGet(req: operations.MeterFolderInformationGetRequest, config?: AxiosRequestConfig): Promise<operations.MeterFolderInformationGetResponse>;
    /**
     * meterFolderInformationPost - Sets the Name of a Meter or a Folder
     *
     * Sets the Name of a Meter or a Folder
    **/
    meterFolderInformationPost(req: operations.MeterFolderInformationPostRequest, config?: AxiosRequestConfig): Promise<operations.MeterFolderInformationPostResponse>;
    /**
     * meterValuesGet - Gets the Values for a Meter at a given Date.
     *             The first Value found before the given Date is returned.
     *
     * Gets the Values for a Meter at a given Date. The first Value found before the given Date is returned.
    **/
    meterValuesGet(req: operations.MeterValuesGetRequest, config?: AxiosRequestConfig): Promise<operations.MeterValuesGetResponse>;
    oAuthAuthorize(req: operations.OAuthAuthorizeRequest, config?: AxiosRequestConfig): Promise<operations.OAuthAuthorizeResponse>;
    postApiAccountLogin(config?: AxiosRequestConfig): Promise<operations.PostApiAccountLoginResponse>;
    postApiOauthAuthorize(req: operations.PostApiOauthAuthorizeRequest, config?: AxiosRequestConfig): Promise<operations.PostApiOauthAuthorizeResponse>;
    /**
     * picoChargingHistoryGet - Gets the last charging history for a pico station
    **/
    picoChargingHistoryGet(req: operations.PicoChargingHistoryGetRequest, config?: AxiosRequestConfig): Promise<operations.PicoChargingHistoryGetResponse>;
    /**
     * picoChargingGet - Gets the active charging data of a pico station
    **/
    picoChargingGet(req: operations.PicoChargingGetRequest, config?: AxiosRequestConfig): Promise<operations.PicoChargingGetResponse>;
    /**
     * picoLoadmanagementGroupGet - GET: api/pico/loadmanagementgroup
     *
     *             Returns a pico load management group by it's id
    **/
    picoLoadmanagementGroupGet(req: operations.PicoLoadmanagementGroupGetRequest, config?: AxiosRequestConfig): Promise<operations.PicoLoadmanagementGroupGetResponse>;
    /**
     * picoLoadmanagementSetDynamicCurrentPost - Sets the dynamic current of a load management group or a single station.
    **/
    picoLoadmanagementSetDynamicCurrentPost(req: operations.PicoLoadmanagementSetDynamicCurrentPostRequest, config?: AxiosRequestConfig): Promise<operations.PicoLoadmanagementSetDynamicCurrentPostResponse>;
    /**
     * picoSettingsGet - GET: api/pico/settings
     *
     *             Returns the settings of a pico charging station.
    **/
    picoSettingsGet(req: operations.PicoSettingsGetRequest, config?: AxiosRequestConfig): Promise<operations.PicoSettingsGetResponse>;
    /**
     * registerForRealtimeApiDelete - Deletes a realtime API registration.
     *
     * Deletes a realtime API registration.
    **/
    registerForRealtimeApiDelete(req: operations.RegisterForRealtimeApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RegisterForRealtimeApiDeleteResponse>;
    /**
     * registerForRealtimeApiGet - Gets all registrations for the Realtime API.
     *
     * Gets all registrations for the Realtime API.
    **/
    registerForRealtimeApiGet(config?: AxiosRequestConfig): Promise<operations.RegisterForRealtimeApiGetResponse>;
    /**
     * registerForRealtimeApiPost - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
     *              More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
     *
     * Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
    **/
    registerForRealtimeApiPost(req: operations.RegisterForRealtimeApiPostRequest, config?: AxiosRequestConfig): Promise<operations.RegisterForRealtimeApiPostResponse>;
    /**
     * smartMeDeviceConfigurationGet - Gets the configuration of a smart-me device.
    **/
    smartMeDeviceConfigurationGet(req: operations.SmartMeDeviceConfigurationGetRequest, config?: AxiosRequestConfig): Promise<operations.SmartMeDeviceConfigurationGetResponse>;
    /**
     * subUserDelete - Delete a subuser
    **/
    subUserDelete(req: operations.SubUserDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SubUserDeleteResponse>;
    /**
     * subUserGet - Get a sub user. The user must be assigend to the user that makes this call.
    **/
    subUserGet(req: operations.SubUserGetRequest, config?: AxiosRequestConfig): Promise<operations.SubUserGetResponse>;
    /**
     * subUserPost - Creates or updates a subuser.
     *             To create a new user set no ID (empty)
    **/
    subUserPost(req: operations.SubUserPostRequest, config?: AxiosRequestConfig): Promise<operations.SubUserPostResponse>;
    /**
     * userToFolderAssignDelete - Deletes a user to folder assignement
    **/
    userToFolderAssignDelete(req: operations.UserToFolderAssignDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UserToFolderAssignDeleteResponse>;
    /**
     * userToFolderAssignPost - Assign a user to a folder
    **/
    userToFolderAssignPost(req: operations.UserToFolderAssignPostRequest, config?: AxiosRequestConfig): Promise<operations.UserToFolderAssignPostResponse>;
    /**
     * userGet - Gets the informations for the user.
     *
     * Gets the informations for the user.
    **/
    userGet(config?: AxiosRequestConfig): Promise<operations.UserGetResponse>;
    /**
     * valuesInPastMultipleGet - Gets multiple values of a device. This call needs a smart-me professional licence.
    **/
    valuesInPastMultipleGet(req: operations.ValuesInPastMultipleGetRequest, config?: AxiosRequestConfig): Promise<operations.ValuesInPastMultipleGetResponse>;
    /**
     * valuesInPastGet - Gets all (last) values of a device
     *             The first Value found before the given Date is returned.
     *
     * Gets the Values for a device at a given Date. The first Value found before the given Date is returned.
    **/
    valuesInPastGet(req: operations.ValuesInPastGetRequest, config?: AxiosRequestConfig): Promise<operations.ValuesInPastGetResponse>;
    /**
     * valuesGet - Gets all (last) values of a device
    **/
    valuesGet(req: operations.ValuesGetRequest, config?: AxiosRequestConfig): Promise<operations.ValuesGetResponse>;
    /**
     * virtualBillingMeterActiveGet - Beta: Gets all active virtual meters
     *
     * Beta: Gets all active virtual meters.
    **/
    virtualBillingMeterActiveGet(config?: AxiosRequestConfig): Promise<operations.VirtualBillingMeterActiveGetResponse>;
    /**
     * virtualBillingMeterActivePost - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
     *
     * Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
    **/
    virtualBillingMeterActivePost(req: operations.VirtualBillingMeterActivePostRequest, config?: AxiosRequestConfig): Promise<operations.VirtualBillingMeterActivePostResponse>;
    /**
     * virtualBillingMeterDeactivatePost - Beta: Virtual Meter API: Deactivates a Virtual Meter.
     *
     * Beta: Virtual Meter API: Deactivates a Virtual Meter.
    **/
    virtualBillingMeterDeactivatePost(req: operations.VirtualBillingMeterDeactivatePostRequest, config?: AxiosRequestConfig): Promise<operations.VirtualBillingMeterDeactivatePostResponse>;
    /**
     * virtualBillingMetersGet - Beta: Gets all Meters available to activate as a Virtual Meter.
     *
     * Beta: Gets all Meters available to activate as a Virtual Meter.
    **/
    virtualBillingMetersGet(config?: AxiosRequestConfig): Promise<operations.VirtualBillingMetersGetResponse>;
    /**
     * virtualMeterCalculateFormulaGet - Calculates a virtual meter from a formula.
     *             A meter is coded as ID("METERID")
     *
     * Calculates a virtual meter from a formula.
     *
     *             A meter is coded as ID("METERID")
     *             Ariphmetical operators:
     *              ()  parentheses;
     *              +   plus (a + b);
     *              -  minus (a - b);
     *              *  multiplycation symbol (a * b);
     *              /  divide symbol (a / b);
     *             Example: (ID("63ac09cb-4e5f-4f3e-bd27-ad8c30bdfc0c") + ID("0209555e-9dc4-4e84-a166-a864488b4b12")) * 2
    **/
    virtualMeterCalculateFormulaGet(req: operations.VirtualMeterCalculateFormulaGetRequest, config?: AxiosRequestConfig): Promise<operations.VirtualMeterCalculateFormulaGetResponse>;
    /**
     * virtualTariffConsumptionGet - Gets the consumption of a folder with a virtuall tariffs.
     *
     * Gets the consumption of a folder with a virtuall tariffs.
    **/
    virtualTariffConsumptionGet(req: operations.VirtualTariffConsumptionGetRequest, config?: AxiosRequestConfig): Promise<operations.VirtualTariffConsumptionGetResponse>;
    /**
     * virtualTariffGet - Gets all Virtual Tariffs of a user
     *
     * Gets all Virtual Tariffs of a user
    **/
    virtualTariffGet(config?: AxiosRequestConfig): Promise<operations.VirtualTariffGetResponse>;
    /**
     * virtualTariffsForPropertyGet - Gets all Virtual Tariffs for a property (folder)
     *
     * Gets all Virtual Tariffs for a property (folder)
    **/
    virtualTariffsForPropertyGet(req: operations.VirtualTariffsForPropertyGetRequest, config?: AxiosRequestConfig): Promise<operations.VirtualTariffsForPropertyGetResponse>;
}
export {};
