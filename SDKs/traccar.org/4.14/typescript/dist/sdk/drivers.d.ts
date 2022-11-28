import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Drivers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDriversId - Delete a Driver
    **/
    deleteDriversId(req: operations.DeleteDriversIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDriversIdResponse>;
    /**
     * getDrivers - Fetch a list of Drivers
     *
     * Without params, it returns a list of Drivers the user has access to
    **/
    getDrivers(req: operations.GetDriversRequest, config?: AxiosRequestConfig): Promise<operations.GetDriversResponse>;
    /**
     * postDrivers - Create a Driver
    **/
    postDrivers(req: operations.PostDriversRequest, config?: AxiosRequestConfig): Promise<operations.PostDriversResponse>;
    /**
     * putDriversId - Update a Driver
    **/
    putDriversId(req: operations.PutDriversIdRequest, config?: AxiosRequestConfig): Promise<operations.PutDriversIdResponse>;
}
