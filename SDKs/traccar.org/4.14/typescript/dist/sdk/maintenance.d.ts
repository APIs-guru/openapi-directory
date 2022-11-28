import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Maintenance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteMaintenanceId - Delete a Maintenance
    **/
    deleteMaintenanceId(req: operations.DeleteMaintenanceIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMaintenanceIdResponse>;
    /**
     * getMaintenance - Fetch a list of Maintenance
     *
     * Without params, it returns a list of Maintenance the user has access to
    **/
    getMaintenance(req: operations.GetMaintenanceRequest, config?: AxiosRequestConfig): Promise<operations.GetMaintenanceResponse>;
    /**
     * postMaintenance - Create a Maintenance
    **/
    postMaintenance(req: operations.PostMaintenanceRequest, config?: AxiosRequestConfig): Promise<operations.PostMaintenanceResponse>;
    /**
     * putMaintenanceId - Update a Maintenance
    **/
    putMaintenanceId(req: operations.PutMaintenanceIdRequest, config?: AxiosRequestConfig): Promise<operations.PutMaintenanceIdResponse>;
}
