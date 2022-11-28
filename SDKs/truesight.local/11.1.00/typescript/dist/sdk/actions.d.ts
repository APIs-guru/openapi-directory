import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Actions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * collectNow - Triggers a new collect on a specific device.
     *
     * You need to provide the <b>Device ID</b> and <b>Monitor Class</b> parameters to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> of a device.
    **/
    collectNow(req: operations.CollectNowRequest, config?: AxiosRequestConfig): Promise<operations.CollectNowResponse>;
    /**
     * rediscover - Triggers a new discovery on a specific device.
     *
     * You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.
    **/
    rediscover(req: operations.RediscoverRequest, config?: AxiosRequestConfig): Promise<operations.RediscoverResponse>;
    /**
     * reinitialize - Sends a 'Reinitialize KM' command.
     *
     * Launches a 'Reinitialize KM' command for the following parameters:<br>- resetDiscoveryAndPollingIntervals<br>- resetAlertAfterNTimes<br>- resetAlertActions<br>- resetOtherA<br>- resetSettings<br>- resetDebugMode<br>- resetRemovedPausedObjectList<br>- resetReportSettings<br>- resetJavaSettings<br>- resetThresholds<br><br>You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.
    **/
    reinitialize(req: operations.ReinitializeRequest, config?: AxiosRequestConfig): Promise<operations.ReinitializeResponse>;
    /**
     * remove - Removes a specific instance from the monitoring environment.
     *
     * You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the Monitor SID).
    **/
    remove(req: operations.RemoveRequest, config?: AxiosRequestConfig): Promise<operations.RemoveResponse>;
    /**
     * reset - Resets the Error Count parameter.
     *
     * Sets the Error Count parameter to 0.<br><br>You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the monitorSid).
    **/
    reset(req: operations.ResetRequest, config?: AxiosRequestConfig): Promise<operations.ResetResponse>;
}
