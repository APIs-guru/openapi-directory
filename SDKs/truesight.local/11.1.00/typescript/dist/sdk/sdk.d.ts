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
     * You need to provide the <b>Device ID</b> and <b>Monitor Class</b> parameters to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> of a device.
    **/
    CollectNow(req: operations.CollectNowRequest, config?: AxiosRequestConfig): Promise<operations.CollectNowResponse>;
    /**
     * You need to provide the <b>Device ID</b> of a device to retrieve any other devices monitored by the same Agent:<br>-use the <b>hardware/devices</b> service to get all available device IDs.
    **/
    GetAgentDevices(req: operations.GetAgentDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentDevicesResponse>;
    /**
     * Lists all the available ApplicationSummary instances.
    **/
    GetApplications(req: operations.GetApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationsResponse>;
    /**
     * You need to provide a <b>Device ID</b>:<br>-use the <b>hardware/devices</b> service to get all available device IDs.
    **/
    GetDevice(req: operations.GetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceResponse>;
    /**
     * You need to provide a <b>Device ID</b> to retrieve detailed information about the Agent that Monitors the device:<br>-use the <b>hardware/devices</b> service to get all available device IDs.
    **/
    GetDeviceAgent(req: operations.GetDeviceAgentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceAgentResponse>;
    /**
     * You need to provide the device ID:<br>- use the <b>hardware/devices</b> service to get all available device IDs.
    **/
    GetDeviceEnergyUsage(req: operations.GetDeviceEnergyUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceEnergyUsageResponse>;
    /**
     * You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs.
    **/
    GetDeviceMonitors(req: operations.GetDeviceMonitorsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceMonitorsResponse>;
    /**
     * You need to provide the <b>Device ID</b>, <b>Parameter Name</b>, <b>Monitor Type</b> and <b>Monitor SID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs<br>- use the <b>/hardware/device-monitors/{deviceId}</b> to get the parameter name, the Monitor type and the Monitor SID.<br><br>Finally, define the period for which you wish to retrieve data history.
    **/
    GetDeviceParameterHistory(req: operations.GetDeviceParameterHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceParameterHistoryResponse>;
    /**
     * Lists the available DeviceSummary instances.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>
    **/
    GetDevices(req: operations.GetDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicesResponse>;
    /**
     * Lists the GlobalSummary instance for all the monitored devices.
    **/
    GetDevicesSummary(config?: AxiosRequestConfig): Promise<operations.GetDevicesSummaryResponse>;
    /**
     * Lists the available GroupSummary instances.
    **/
    GetGroups(req: operations.GetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsResponse>;
    /**
     * If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>
    **/
    GetHeatingMarginCoverage(req: operations.GetHeatingMarginCoverageRequest, config?: AxiosRequestConfig): Promise<operations.GetHeatingMarginCoverageResponse>;
    /**
     * Gets the historical data for a specific group, application or service, for a given period.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>
    **/
    GetHistory(req: operations.GetHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetHistoryResponse>;
    /**
     * You need to provide an <b>Application ID</b>:<br>- use the <b>hardware/applications</b> service to retrieve all available application IDs.
    **/
    GetOneApplication(req: operations.GetOneApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetOneApplicationResponse>;
    /**
     * You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.
    **/
    GetOneGroup(req: operations.GetOneGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetOneGroupResponse>;
    /**
     * You need to provide a <b>Service ID</b> ID :<br>- use the <b>hardware/services</b> service to get all available service IDs.
    **/
    GetOneService(req: operations.GetOneServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetOneServiceResponse>;
    /**
     * Lists the available ServiceSummary instances.
    **/
    GetServices(req: operations.GetServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetServicesResponse>;
    /**
     * You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.
    **/
    Rediscover(req: operations.RediscoverRequest, config?: AxiosRequestConfig): Promise<operations.RediscoverResponse>;
    /**
     * Launches a 'Reinitialize KM' command for the following parameters:<br>- resetDiscoveryAndPollingIntervals<br>- resetAlertAfterNTimes<br>- resetAlertActions<br>- resetOtherA<br>- resetSettings<br>- resetDebugMode<br>- resetRemovedPausedObjectList<br>- resetReportSettings<br>- resetJavaSettings<br>- resetThresholds<br><br>You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.
    **/
    Reinitialize(req: operations.ReinitializeRequest, config?: AxiosRequestConfig): Promise<operations.ReinitializeResponse>;
    /**
     * You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the Monitor SID).
    **/
    Remove(req: operations.RemoveRequest, config?: AxiosRequestConfig): Promise<operations.RemoveResponse>;
    /**
     * Sets the Error Count parameter to 0.<br><br>You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the monitorSid).
    **/
    Reset(req: operations.ResetRequest, config?: AxiosRequestConfig): Promise<operations.ResetResponse>;
    /**
     * Gets the DeviceSummary instances whose name, model, manufacturer or serial number match the specified criteria.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>
    **/
    SearchDevices(req: operations.SearchDevicesRequest, config?: AxiosRequestConfig): Promise<operations.SearchDevicesResponse>;
    /**
     * You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.<br><br>If the ID is <em>"global"</em>, then the group being updated is the GlobalSummary.
    **/
    UpdateEnergyCost(req: operations.UpdateEnergyCostRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnergyCostResponse>;
}
export {};
