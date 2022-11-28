import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Devices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDevicesId - Delete a Device
    **/
    deleteDevicesId(req: operations.DeleteDevicesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDevicesIdResponse>;
    /**
     * getDevices - Fetch a list of Devices
     *
     * Without any params, returns a list of the user's devices
    **/
    getDevices(req: operations.GetDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicesResponse>;
    /**
     * postDevices - Create a Device
    **/
    postDevices(req: operations.PostDevicesRequest, config?: AxiosRequestConfig): Promise<operations.PostDevicesResponse>;
    /**
     * putDevicesId - Update a Device
    **/
    putDevicesId(req: operations.PutDevicesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutDevicesIdResponse>;
    /**
     * putDevicesIdAccumulators - Update total distance and hours of the Device
    **/
    putDevicesIdAccumulators(req: operations.PutDevicesIdAccumulatorsRequest, config?: AxiosRequestConfig): Promise<operations.PutDevicesIdAccumulatorsResponse>;
}
