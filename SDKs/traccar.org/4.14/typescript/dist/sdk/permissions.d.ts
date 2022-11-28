import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Permissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePermissions - Unlink an Object from another Object
    **/
    deletePermissions(req: operations.DeletePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionsResponse>;
    /**
     * postPermissions - Link an Object to another Object
    **/
    postPermissions(req: operations.PostPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PostPermissionsResponse>;
}
